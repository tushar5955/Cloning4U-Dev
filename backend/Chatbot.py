import time
class AssistantRunner:
    def __init__(self, client):
        # Initialize assistant in constructor
        self.assistant = client.beta.assistants.retrieve("asst_nf5teRE1VEtOBCil0i58TzKz")
        self.client = client

    def run_assistant(self, thread_id):
    # Run the assistant using pre-initialized assistant
        run = self.client.beta.threads.runs.create(
            thread_id=thread_id,
            assistant_id=self.assistant.id,
        )

        # Wait for completion (same logic as before)
        while run.status != "completed":
            time.sleep(0.5)
            run = self.client.beta.threads.runs.retrieve(thread_id=thread_id, run_id=run.id)
            print(run.status)
            

        # Retrieve the Messages (same logic as before)
        messages = self.client.beta.threads.messages.list(thread_id=thread_id)
        new_message = messages.data[0].content[0].text.value
        # print(f"Generated message: {new_message}")
        return new_message

    def reply(self, message, thread=None):
        thread_id = "thread_MY3q8egNSv4EJ63vPCEDAX0R"
        message = self.client.beta.threads.messages.create(
        thread_id=thread_id,
        role="user",
        content=message,
    )
        # Run the assistant and get the new message
        print(thread_id)
        new_message = self.run_assistant(thread_id)
        print(new_message)
        return new_message