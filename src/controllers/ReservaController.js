import Reserva from '../models/Reserva';
import Usuario from '../models/Usuario';

class ReservaController{

    
    async index(req, res){
        const {responsavel} = req.body;
        let reserva = await Reserva.find({ responsavel });
        return res.json(reserva);
    }
    async store(req, res){
        const {usuario_id, dataInicial, dataFinal, qtdeHospedes } = req.body;
        const { hotel_id } = req.params;

        console.log(usuario_id);
        //validando se o hotel existe
        let reserva = await Reserva.create({responsavel: usuario_id, hotel: hotel_id, dataInicial,
                                            dataFinal, qtdeHospedes });
        await reserva.populate('responsavel').populate('hotel').execPopulate();

        return res.json(reserva);
    }   //responsavel popr criar um novo intem, fazendo o mesmo papel do insert no SQL

}

export default new ReservaController;