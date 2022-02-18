const handlers = ({axios}) => ({

    post : async(req, res) => {
        const {body} = req
        const {data} = await axios.post('https://jsonplaceholder.typicode.com/users', body)
        res.status(201).send(data)
        
    }
})

module.exports = handlers