import sys

username = sys.argv[1]
password = sys.argv[2]


# Put data to be sent back to server in this variable. Should be string
# everything that's printed in this file is sent as reponse
dataToBeSentBack = username + "/" + password



# Send the data back to script
print(dataToBeSentBack, end='')
sys.stdout.flush()