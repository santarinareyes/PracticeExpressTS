import { Router, Request, Response } from "express"

const router = Router()

router.get("/login", (req: Request, res: Response) => {
  res.send(`
    <form method="POST>
        <div>
            <label for="email">Email</label>
            <input type="email" name="email" />
        </div>
        <div>
            <label for="password">Password</label>
            <input type="password" name="password" />
            <button>Login</button>
        </div>
    </form>
  `)
})

export { router }
