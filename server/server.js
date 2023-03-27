const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.get('/project', cors(), async (req, res) => {
    res.json({
        "projects": 
        {name: "PlaceHolder",
        icon: "placeHolderIcon", //insert picture object
        description: "Placeholder",
        expanded:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec massa sapien faucibus et molestie. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet."}
    })
})

app.listen(8000, () => (console.log("Server listening on port 8000")))