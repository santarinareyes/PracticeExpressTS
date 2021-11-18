import { Router, Request, Response } from "express"

interface RequestWithBodyParser extends Request {
  body: { [key: string]: string | undefined }
}

export const router = Router()

router.get("/login", (req: Request, res: Response) => {
  res.send(`
    <form method="POST">
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

router.post("/login", (req: RequestWithBodyParser, res: Response) => {
  const { email, password } = req.body

  if (email && password) {
    res.send(email + password)
  } else {
    res.send("Both fields must be filled")
  }
})
