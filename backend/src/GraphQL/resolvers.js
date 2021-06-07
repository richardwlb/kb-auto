const db = require('../models');

const resolvers = {
  Query: {
    kbRegisters: async ( parent, args, { models }) => db.KbRegisters.findAll(),
    someKbRegisters: async ( parent, { limit, offset }, { models }) => db.KbRegisters.findAll({ limit, offset }),
    kbRegister: async (obj, args, context, info) => 
      await db.KbRegisters.findByPk(args.id)    
  },

  Mutation: {
    async createRegister (obj,
     { 
      title,
      car_brand,
      car_model,
      car_year,
      desc_problem,
      desc_solution,
    }
    ) {
      const register = {
        title,
        car_brand,
        car_model,
        car_year,
        desc_problem,
        desc_solution,
      };
      try{
        const result = await db.KbRegisters.create(register);
        return result;
      } catch (err) {
        console.log(err);
      }
    },
    async deleteRegister(obj, { id }) {
      // console.log(obj);
      await db.KbRegisters.destroy({
        where: { id: id }
      });
    },

    async updateRegister (obj,
      { 
        id,
        title,
        car_brand,
        car_model,
        car_year,
        desc_problem,
        desc_solution,
     }
     ) {
       const register = {
         id,
         title,
         car_brand,
         car_model,
         car_year,
         desc_problem,
         desc_solution,
       };
       try{
          await db.KbRegisters.update( 
            register,
            { where: { id: id } }
         );
       } catch (err) {
         console.log(err);
       }
     },


  }
}

module.exports = resolvers;