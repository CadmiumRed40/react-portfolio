const express = require('express')
const app = express

app.get('/api', (req, res) => {
    res.json({
        "projects": 
        {name: "PlaceHolder",
        icon: placeHolderIcon,
        description: "Placeholder",
        expanded:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec massa sapien faucibus et molestie. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet."}
    })
})

app.listen(5000, () => (console.log("Server listening on port 5000")))