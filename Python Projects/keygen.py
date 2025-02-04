from Crypto.Cipher import PKCS1_OAEP
from Crypto.PublicKey import RSA

#generate private key with 1024 bits
private_key = RSA.generate(1024)

#generate public key
public_key = private_key.publickey()

private_text = private_key.export_key().decode()
public_text = public_key.export_key().decode()

f = open('private.key', 'w')
f.write(private_key)
f.close()