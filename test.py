from re import sub
c = '''
Create completion
Create chat completion
Create edit
Create embedding
Create file
Create image
Create finetune
Create image edit
Create image variation
Create moderation
Create transcription
Create translation
Delete file
Delete model
Download file
List files
List finetune events
List finetunes
List models
Retrieve file
Retrieve finetune
Retrieve model
'''

list_of_actions = c.split("\n")

list_of_actions_new = []

for action in list_of_actions:
    text = action.strip()
    if(text != ''):
        list_of_actions_new.append(text)

# print(list_of_actions_new)


def snake_case(s):
    return '_'.join(
        sub('([A-Z][a-z]+)', r' \1',
            sub('([A-Z]+)', r' \1',
                s.replace('-', ' '))).split()).lower()


for ls in list_of_actions_new:
    print("{value: " + f"'{snake_case(ls)}' " + f", label: '{ls}' " + "}")
