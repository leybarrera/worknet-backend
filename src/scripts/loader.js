import { Skill, User } from '../lib/conn.js'
import { skills } from '../mocks/skills.js'
import { skillService } from '../services/index.services.js'
import { bcryptUtil } from '../utils/index.utils.js'
export const loaderData = async () => {
  try {
    const { _, skills: skillsData } = await skillService.getAll()
    if (skillsData.length === 0 || skillsData.length < skills.length) {
      const mapSkills = skills.map((skill) => ({
        name: skill,
      }))
      const rows = await Skill.bulkCreate(mapSkills)
      if (rows.length > 0) {
        console.log('Se agregaron las actividades')
      }
    }

    const pass = await bcryptUtil.hashPassword('a12b32*')

    await User.bulkCreate([
      {
        name: 'User',
        surname: 'Admin',
        email: 'useradmin@gmail.com',
        password: pass,
        location: 'La Maná',
        dni: '1111111111',
        phone: '222222222',
        gender: 'M',
        role: 'Administrador',
        isActive: 'true',
      },
      {
        name: 'User',
        surname: 'Candidato',
        email: 'usercandidato@gmail.com',
        password: pass,
        location: 'La Maná',
        dni: '1111111112',
        phone: '222222223',
        gender: 'M',
        role: 'Candidato',
        isActive: 'true',
      },

      {
        name: 'User',
        surname: 'Candidato 2',
        email: 'usercandidato2@gmail.com',
        password: pass,
        location: 'La Maná',
        dni: '1111111110',
        phone: '222222224',
        gender: 'M',
        role: 'Candidato',
        isActive: 'true',
      },
    ])
  } catch (error) {
    console.log('Error al cargar las skills: ', error.message)
  }
}
