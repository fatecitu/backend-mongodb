import express from 'express'

const app = express()
const port = 4000 
//import das rotas da app
import rotasPrestadores from './routes/prestador.js'

//app.use(express.urlencoded({ extended: true}))
app.use(express.json()) // irá fazer o parse de arquivos JSON
//Rotas de conteúdo público
app.use('/', express.static('public'))

//Configura o favicon
app.use('/favicon.ico', express.static('public/images/computer.png'))

//Rotas da API
app.use('/api/prestadores', rotasPrestadores)

app.get('/api', (req, res) => {
    res.status(200).json({
        message: 'API Fatec 100% funcional🖐',
        version: '1.0.1'
    })
})
//Rotas de Exceção - deve ser a última!
app.use(function (req, res) {
    res.status(404).json({
        errors: [{
            value: `${req.originalUrl}`,
            msg: `A rota ${req.originalUrl} não existe nesta API!`,
            param: 'invalid route'
        }]
    })
})
app.listen(port, function(){
    console.log(`🖥 Servidor rodando na porta ${port}`)
})