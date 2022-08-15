import { AppError } from "./AppError"

export default function useErrors(err: Error, req, res, next) {
    if (err instanceof AppError) {
        return res.status(err.status).json({ error: err.message })
    }

    return res.status(500).json({ error: `${err.message}`, message: `Ocorreu um erro inesperado em nossos servidores ` })
}
