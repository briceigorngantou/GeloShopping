import bcrypt from 'bcrypt';
/**

A helper class for cryptography operations such as password hashing.
*/
export class CryptographyHelper {
    /**
    
    The salt value used for password hashing.
    @type {string}
    
    */
    salt = bcrypt.genSaltSync(10);
    /**
    
    Hashes the given password using bcrypt and the salt value of this instance.
    @param {string} password - The password to be hashed.
    @returns {string} The hashed password.
    */
    hashPassword(password) {
        return bcrypt.hashSync(password, this.salt);
    }
    /**
     * Compare a plaintext password to a hashed password using bcrypt.
     *
     * @param {string} plaintextPassword - The plaintext password to compare.
     * @param {string} hashedPassword - The hashed password to compare.
     * @returns {Promise<boolean>} A Promise that resolves with a boolean value indicating whether the passwords match.
     */
    async comparePasswords(plaintextPassword, hashedPassword) {
        try {
            return await bcrypt.compare(plaintextPassword, hashedPassword);
        } catch (error) {
            console.error(error);
            throw new Error('Error comparing passwords');
        }
    }
}
