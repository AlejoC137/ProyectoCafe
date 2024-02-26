const {
    getAllArchControler
} =  require('../../controlers/arch/getArchControler.js')

const getAllArch = async (req,res) => {
    try {
        const allArch = await getAllArchControler(req,res);

        res.json(allArch);

    } catch (error) {

        console.error(error);
        res.status(500).json({ error: 'Ocurrió un error en el servidor' });
    }
}




module.exports = {
    
    getAllArch

}