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
    if (email === "correct@correct.com" && password === "correct") {
      req.session = { loggedIn: true }
      res.redirect("/")
    } else {
      res.send("Email or password is incorrect")
    }
  } else {
    res.send("Both fields must be filled")
  }
})

router.get("/", (req: Request, res: Response) => {
  if (req?.session?.loggedIn) {
    res.send(`
            <div>
                <div>Successfully logged in</div>
                <a href="/logout">Logout</a>
            </div>
        `)
  } else {
    res.send(`
            <div>
                <div>Please login</div>
                <a href="/login">Login</a>
            </div>
        `)
  }
})
