isAdmin = (req, res, next) => {
	try {
		const token = req.header('authorization')
		console.log(token, token === 'admin')
		if(!token) return res.status(401).json({ msg: 'No auth token' })
	  	if (token === 'admin') next()
	} catch (err) {
	 	res.status(500).json({ error: err.message })
	}
}

module.exports = isAdmin