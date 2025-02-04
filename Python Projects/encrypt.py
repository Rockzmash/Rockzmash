from Crypto.Cipher import PKCS1_OAEP
from Crypto.PublicKey import RSA

f = open('private.key', 'r')
private_key = RSA.import_key(f.read())
f.close()

decrypt = PKCS1_OAEP.new(key=private_key)

f = open('secret_message', 'rb')
secret = f.read()
f.close()

decrypted = decrypt.decrypt(secret)
print(decrypted)