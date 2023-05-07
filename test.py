from re import sub
c = '''
ChatComponent
EditsComponent
ImagesComponent
EmbeddingsComponent
AudioComponent
FilesComponent
{ls}
'''

list_of_actions = c.split("\n")

list_of_actions_new = []

for action in list_of_actions:
    text = action.strip()
    if(text != ''):
        list_of_actions_new.append(text)


for ls in list_of_actions_new:
    print(f'''    
interface {ls}Props {"{ }" }

const  {ls} :React.FC<{ls}Props> = () => {"""{
    return <></>
}"""}

export default {ls}; 



------------------------------
    ''')
