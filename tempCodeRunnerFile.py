import os
from pydo import Client
client = Client(
    token="sk-do-8hOWvJp0K7MnZMYxD6-ZraPWwapx0iPmX-q9NCEIqHB3YKgpJqX8MnMz2a",
)
stream = client.inference.create_chat_completion(
    body={
        "messages": [
            {
                "role": "user",
                "content": "Tell me a fun facts about octopuses",
            }
        ],
        "model": "gemma-4-31B-it",
        "max_tokens": 512,
        "stream": True,
    }
)
with stream:
    for chunk in stream:
        delta = (chunk.get("choices") or [{}])[0].get("delta", {})
        token = delta.get("content", "")
        if token:
            print(token, end="", flush=True)
print()