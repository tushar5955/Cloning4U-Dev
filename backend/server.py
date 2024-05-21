from Chatbot import *


from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask_cors import CORS
from openai import OpenAI

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///chat_data.db'  # SQLite database URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
api_key = 'sk-proj-xt8CdEFDNHb2Ur6AVI1LT3BlbkFJoZZqG7XmSCwPjX4mHDDp'
client = OpenAI(api_key= api_key)
chatbot = AssistantRunner(client)

# Define your database model
class ChatEntry(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime, default=datetime.utcnow)
    user = db.Column(db.String(50))
    bot = db.Column(db.String(50))

    def __repr__(self):
        return f"<ChatEntry {self.id}>"

# Create the SQLite database and table if they don't exist
with app.app_context():
    db.create_all()
# Cookie name and settings (adjust as needed)
COOKIE_NAME = 'fbe30854-f8c2-4a90-81e4-6fefcc652085'
COOKIE_EXPIRES = 30  # Days (adjust for desired cookie lifetime)
# Your existing route for processing JSON and replying
@app.route('/reply', methods=['POST'])
def process_json():
    try:
        data = request.get_json()
        message = data['message']

        # Check for cookie
        cookie_value = request.cookies.get(COOKIE_NAME)
        print(cookie_value)
        # Create cookie if it doesn't exist
        if not cookie_value:
            # Set expiration date
            expires = datetime.utcnow() + timedelta(days=COOKIE_EXPIRES)
            response = app.make_response(jsonify(chatbot_reply(message)))
            response.set_cookie(COOKIE_NAME, value='set', expires=expires, secure=True, httponly=True)  # Secure cookie for HTTPS only
            return response
        response = chatbot.reply(message)

        # Store the conversation entry in the database
        entry = ChatEntry(user=message, bot=response)  # Update user and bot data accordingly
        db.session.add(entry)
        db.session.commit()

        return jsonify(response)
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')  # Run the Flask app in debug mode
