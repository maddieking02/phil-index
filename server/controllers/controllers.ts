import { searchPaper } from '../helpers/philpapers';

export const controllers = {
  testAPI: (req: any, res: any) => {
    searchPaper()
    .then((response: any) => {
      console.log('response', response)
    })
    .catch((err: unknown) => {
      res.status(400).send();
    })
  }
}