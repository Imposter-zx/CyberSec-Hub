import { EncryptionConcept } from '@/types';

export const encryptionConcepts: EncryptionConcept[] = [
  // Symmetric Algorithms
  {
    id: 'aes',
    name: 'AES (Advanced Encryption Standard)',
    category: 'Symmetric Encryption',
    type: 'symmetric',
    definition: 'A symmetric block cipher established by NIST in 2001 (FIPS 197) operating on 128-bit blocks with key lengths of 128, 192, or 256 bits. The worldwide standard for bulk data encryption.',
    howItWorks: 'Applies a substitution-permutation network over multiple rounds (10 rounds for 128-bit, 14 rounds for 256-bit). Each round consists of SubBytes, ShiftRows, MixColumns, and AddRoundKey transformations. When used in GCM (Galois/Counter Mode), it provides Authenticated Encryption with Associated Data (AEAD).',
    keySize: '128, 192, 256 bits',
    status: 'current',
    useCases: ['TLS 1.3 payload encryption (AES-GCM)', 'Full disk encryption (BitLocker, FileVault, LUKS with XTS-AES)', 'Database column encryption', 'VPN traffic (IPsec, WireGuard fallback)'],
    relatedConcepts: ['chacha20', 'symmetric-key', 'iv']
  },
  {
    id: 'chacha20-poly1305',
    name: 'ChaCha20-Poly1305',
    category: 'Symmetric Encryption',
    type: 'symmetric',
    definition: 'A modern high-speed stream cipher paired with the Poly1305 authenticator (RFC 8439) providing high-security Authenticated Encryption (AEAD).',
    howItWorks: 'Generates a keystream by continuously updating a 512-bit state matrix using simple Add-Rotate-XOR (ARX) operations -> XORs keystream with plaintext -> Generates 128-bit Poly1305 MAC tag to ensure message integrity.',
    keySize: '256 bits',
    status: 'current',
    useCases: ['WireGuard VPN default cipher', 'TLS 1.3 mobile connections (faster on devices without dedicated AES-NI hardware)', 'SSH protocol', 'Signal Protocol'],
    relatedConcepts: ['aes', 'nonce', 'symmetric-key']
  },
  {
    id: 'des',
    name: 'DES (Data Encryption Standard)',
    category: 'Symmetric Encryption',
    type: 'symmetric',
    definition: 'An obsolete 1977 symmetric block cipher operating on 64-bit blocks with an effective key size of only 56 bits.',
    howItWorks: 'Uses a 16-round Feistel network with S-box substitutions and permutations to encrypt 64-bit blocks.',
    keySize: '56 bits (effective)',
    status: 'deprecated',
    useCases: ['Obsolete. Replaced by AES. Broken via distributed brute-force in less than 24 hours.'],
    relatedConcepts: ['triple-des', 'aes']
  },
  {
    id: 'triple-des',
    name: '3DES (Triple DES / TDEA)',
    category: 'Symmetric Encryption',
    type: 'symmetric',
    definition: 'A legacy cipher designed to extend DES lifespan by applying the DES algorithm three consecutive times (Encrypt-Decrypt-Encrypt) with 2 or 3 distinct keys.',
    howItWorks: 'Ciphertext = Encrypt_K3(Decrypt_K2(Encrypt_K1(Plaintext))).',
    keySize: '112 or 168 bits',
    status: 'legacy',
    useCases: ['Legacy banking and EMV payment systems (being phased out per NIST SP 800-131A due to Sweet32 64-bit block collision attacks).'],
    relatedConcepts: ['des', 'aes']
  },

  // Asymmetric Cryptography
  {
    id: 'rsa',
    name: 'RSA (Rivest-Shamir-Adleman)',
    category: 'Asymmetric Cryptography',
    type: 'asymmetric',
    definition: 'An asymmetric public-key cryptosystem based on the practical mathematical difficulty of factoring the product of two large prime numbers.',
    howItWorks: 'Public key `(e, n)` is published; private key `(d, n)` is kept secret where `n = p * q`. Encryption: `C = M^e mod n`. Decryption: `M = C^d mod n`. Digital signing is performed by encrypting the hash of a message with the private key.',
    keySize: '2048, 3072, 4096 bits (minimum 2048 required today)',
    status: 'current',
    useCases: ['HTTPS/TLS certificate signatures (X.509 PKI)', 'SSH host and client key authentication', 'Email signing (S/MIME, PGP)', 'Code signing'],
    relatedConcepts: ['ecc', 'digital-signature', 'public-key']
  },
  {
    id: 'ecc',
    name: 'ECC (Elliptic Curve Cryptography)',
    category: 'Asymmetric Cryptography',
    type: 'asymmetric',
    definition: 'A modern public-key cryptography approach based on the algebraic structure of elliptic curves over finite fields, offering equivalent security to RSA at dramatically smaller key sizes.',
    howItWorks: 'Utilizes the Elliptic Curve Discrete Logarithm Problem (ECDLP). Computing `Q = d * P` (point multiplication) is fast, but computing scalar `d` given `Q` and `P` is computationally infeasible.',
    keySize: '256 bits (ECDSA P-256 equals RSA 3072-bit security)',
    status: 'current',
    useCases: ['Modern TLS 1.3 certificates', 'Cryptocurrency signatures (Bitcoin/Ethereum secp256k1)', 'Smartphones and IoT secure enclaves', 'FIDO2 / WebAuthn tokens'],
    relatedConcepts: ['rsa', 'ecdh', 'eddsa']
  },
  {
    id: 'diffie-hellman',
    name: 'Diffie-Hellman Key Exchange (DH / DHE)',
    category: 'Asymmetric Cryptography',
    type: 'asymmetric',
    definition: 'A pioneering mathematical protocol allowing two parties with no prior shared secrets to establish a shared symmetric secret over an untrusted public communication channel.',
    howItWorks: 'Both parties agree on public prime `p` and base `g`. Alice chooses secret `a` and sends `A = g^a mod p`. Bob chooses secret `b` and sends `B = g^b mod p`. Alice computes `K = B^a mod p`; Bob computes `K = A^b mod p`. Both arrive at identical secret `K = g^(ab) mod p` without transmitting `K`.',
    keySize: '2048+ bits (Ephemeral DHE)',
    status: 'current',
    useCases: ['Forward Secrecy in TLS and IPsec handshakes', 'SSH key negotiation'],
    relatedConcepts: ['ecdh', 'key-exchange']
  },
  {
    id: 'ecdh',
    name: 'ECDH (Elliptic Curve Diffie-Hellman)',
    category: 'Asymmetric Cryptography',
    type: 'asymmetric',
    definition: 'An anonymous key agreement protocol that enables two parties, each having an elliptic-curve public-private key pair, to establish a shared secret over an insecure channel.',
    howItWorks: 'Alice private scalar `d_A`, public point `Q_A = d_A * G`. Bob computes shared secret point `S = d_B * Q_A = d_B * d_A * G`. Ephemeral ECDHE generates fresh key pairs per session, guaranteeing Perfect Forward Secrecy (PFS).',
    keySize: '256 bits (Curve25519 / P-256)',
    status: 'current',
    useCases: ['TLS 1.3 default handshake key exchange', 'Signal Protocol / WhatsApp End-to-End Encryption', 'SSH x25519 key exchange'],
    relatedConcepts: ['diffie-hellman', 'ecc', 'forward-secrecy']
  },
  {
    id: 'eddsa',
    name: 'EdDSA / Ed25519 (Edwards-curve Digital Signature Algorithm)',
    category: 'Asymmetric Cryptography',
    type: 'asymmetric',
    definition: 'A high-performance, collision-resilient digital signature scheme using twisted Edwards curves (Curve25519) designed by Daniel J. Bernstein.',
    howItWorks: 'Deterministic signature generation without requiring random number generators during signing (eliminating the catastrophic Sony PS3 ECDSA private key recovery bug caused by nonce reuse).',
    keySize: '256 bits',
    status: 'current',
    useCases: ['Modern OpenSSH default key format (`ssh-keygen -t ed25519`)', 'Git commit signing', 'Tor onion v3 routing addresses', 'TLS 1.3 signatures'],
    relatedConcepts: ['ecc', 'digital-signature']
  },

  // Hashing & Password Derivation
  {
    id: 'sha-256',
    name: 'SHA-256 (Secure Hash Algorithm 256-bit)',
    category: 'Cryptographic Hashing',
    type: 'hashing',
    definition: 'A cryptographic hash function designed by NSA that produces a fixed 256-bit (32-byte) digest from any input data with strong collision and pre-image resistance.',
    howItWorks: 'Processes data in 512-bit blocks through 64 rounds of bitwise logic, rotations, and modulo additions using the Merkle-Damgård construction.',
    keySize: 'Output: 256 bits',
    status: 'current',
    useCases: ['Digital signature digests', 'Software download integrity verification (checksums)', 'HMAC-SHA256 message authentication', 'Blockchain Proof-of-Work (Bitcoin)'],
    relatedConcepts: ['sha-3', 'hash', 'password-hashing']
  },
  {
    id: 'argon2',
    name: 'Argon2 (Argon2id)',
    category: 'Password Hashing & KDF',
    type: 'hashing',
    definition: 'The winner of the 2015 Password Hashing Competition (RFC 9106), state-of-the-art memory-hard key derivation function engineered specifically to resist GPU and ASIC brute-force cracking.',
    howItWorks: 'Configurable across three dimensions: Time cost (iterations), Memory cost (e.g. allocating 64 MB of RAM per hash), and Parallelism (threads). Fills a large memory buffer in pseudorandom order; Argon2id combines data-independent and data-dependent memory access to prevent side-channel and cache-timing attacks.',
    keySize: 'Configurable output (typically 256 or 512 bits)',
    status: 'current',
    useCases: ['Modern user password storage in web applications', 'KeePassXC database master password key derivation', 'LUKS2 disk encryption header key derivation'],
    relatedConcepts: ['bcrypt', 'scrypt', 'salt', 'password-hashing']
  },
  {
    id: 'bcrypt',
    name: 'bcrypt',
    category: 'Password Hashing & KDF',
    type: 'hashing',
    definition: 'An adaptive password-hashing function based on the Blowfish cipher designed by Niels Provos and David Mazières in 1999 (RFC 7693).',
    howItWorks: 'Utilizes the Eksblowfish (Expensive Key Schedule Blowfish) algorithm with a configurable work factor (cost). Doubling the cost doubles the computation time required to verify or attack each password. Automatically embeds a 128-bit salt.',
    keySize: '192 bits (embedded salt + 184-bit hash output)',
    status: 'current',
    useCases: ['Standard web application password storage (Node.js bcrypt, Django, Ruby on Rails)'],
    relatedConcepts: ['argon2', 'scrypt', 'salt']
  },
  {
    id: 'scrypt',
    name: 'scrypt',
    category: 'Password Hashing & KDF',
    type: 'hashing',
    definition: 'A sequential memory-hard key derivation function designed by Colin Percival in 2009 specifically to make large-scale custom hardware (ASIC/FPGA) cracking attacks prohibitively expensive.',
    howItWorks: 'Requires significant amounts of fast RAM memory (e.g. 16MB-64MB) per attempt, forcing hardware attackers to dedicate expensive high-speed memory channels rather than pure ALU cores.',
    keySize: 'Configurable output',
    status: 'current',
    useCases: ['Cryptocurrency wallet seed generation', 'Tarsnap backup encryption key derivation', 'Password storage'],
    relatedConcepts: ['argon2', 'bcrypt', 'password-hashing']
  },

  // Core Cryptographic Concepts
  {
    id: 'salt',
    name: 'Cryptographic Salt',
    category: 'Core Concept',
    type: 'concept',
    definition: 'A unique, cryptographically random string generated and appended to a password before hashing to defend against precomputed rainbow table attacks.',
    howItWorks: 'When user creates password "Secret123", system generates 16 bytes random salt `r9X$a1!k` -> Computes `Hash(Secret123 + r9X$a1!k)` -> Stores salt in database alongside hash. Even if two users share the same password, their hashes are completely distinct.',
    status: 'current',
    useCases: ['Password hashing databases', 'Key derivation'],
    relatedConcepts: ['password-hashing', 'argon2', 'bcrypt']
  },
  {
    id: 'iv-nonce',
    name: 'Initialization Vector (IV) and Nonce',
    category: 'Core Concept',
    type: 'concept',
    definition: 'An arbitrary number used once in a cryptographic communication (Nonce = "Number used ONCE") or random initial block (IV) to ensure that identical plaintexts encrypt to distinct ciphertexts.',
    howItWorks: 'In block ciphers like AES-CBC or stream ciphers like AES-GCM, the IV/Nonce is combined with the first block of plaintext and the key. Reusing a nonce with the same key in GCM or ChaCha20 destroys authenticity and allows ciphertext recovery.',
    status: 'current',
    useCases: ['AES-GCM 96-bit nonce', 'TLS records', 'WPA3 handshake'],
    relatedConcepts: ['aes', 'chacha20-poly1305']
  },
  {
    id: 'digital-signature',
    name: 'Digital Signatures',
    category: 'Core Concept',
    type: 'concept',
    definition: 'A mathematical scheme for demonstrating the authenticity, integrity, and non-repudiation of a digital message or document.',
    howItWorks: 'Sender calculates cryptographic hash of document `H = Hash(Document)` -> Encrypts `H` with Sender Private Key to create Signature `S` -> Recipient decrypts `S` with Sender Public Key to get `H1` and calculates `H2 = Hash(Document)`. If `H1 == H2`, the document is authentic and unmodified.',
    status: 'current',
    useCases: ['X.509 SSL/TLS certificates', 'Software code signing (Authenticode)', 'PDF legal signing (DocuSign)', 'Bitcoin transaction authorization'],
    relatedConcepts: ['rsa', 'eddsa', 'ecc']
  },
  {
    id: 'password-hashing-distinction',
    name: 'Why Fast Hashes (SHA-256) Fail for Password Storage',
    category: 'Core Concept',
    type: 'concept',
    definition: 'An essential cybersecurity design principle: Cryptographic hash functions like SHA-256 and MD5 are engineered to be computationally FAST (capable of hashing gigabytes per second), which makes them disastrous for passwords because modern GPU cracking rigs can calculate over 100 billion SHA-256 hashes per second. Password hashing algorithms (Argon2id, bcrypt) are deliberately designed to be SLOW and MEMORY-HARD.',
    howItWorks: 'A GPU cluster attempting to crack a salted SHA-256 hash can test billions of password guesses per second. In contrast, with Argon2id tuned to 64 MB of RAM and 3 iterations, that same GPU cluster is choked by memory bandwidth and can only test a few thousand guesses per second, increasing offline brute-force cracking resistance by a factor of millions.',
    status: 'current',
    useCases: ['Secure software engineering standards', 'OWASP Password Storage Cheat Sheet compliance'],
    relatedConcepts: ['argon2', 'bcrypt', 'sha-256', 'salt']
  }
];
