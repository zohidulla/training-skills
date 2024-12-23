import jsonwebtoken from 'jsonwebtoken';

export const generateToken = async <T extends object>(payload: T, secret: string, expireTime: string): Promise<string | undefined> => {
    return new Promise((resolve, reject) => {
        jsonwebtoken.sign(payload, secret, { expiresIn: expireTime }, (error, encoded) => {
            if (error) return reject(error);

            resolve(encoded);
        })
    })
};

export const verify = async (token: string, secret: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        jsonwebtoken.verify(token, secret, (error, payload) => {
            if (error) return reject(error);

            resolve(payload);
        })
    })
}