import dotenv from 'dotenv'
dotenv.config()
export async function get(request) {
    let message=process.env['DB_NAME']
    console.log(message)
    return {
        body: {
            message:message
        }
    };
}