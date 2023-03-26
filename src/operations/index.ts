import axios from 'axios'

interface ClassItem {
  id: number
  name: string
  desc: string
  tags: string[]
  active: boolean
}

export const GetClasses = async () => {
  try {
    const res = await axios.get('/api/classes.json')

    if (res.status === 200) {
      return res.data as ClassItem[]
    }
  } catch (error) {
    console.log(error)
  }
}
