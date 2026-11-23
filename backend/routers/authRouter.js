import { Router } from "express"

const router = Router()

router.get("/api/auth/test", (req, res) => {
    res.json({ message: "Det virker"})
})

router.post("/api/auth/register", (req, res) => {
    const { email, password } = req.body

    res.json({
        message: "Brugeren blev oprettet",
        email: email
    })
})

export default router
