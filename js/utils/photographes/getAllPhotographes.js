import { photographers } from '../../../datas.json';

const getAllPhotographers = () => {
   return photographers.map(photographer => {
        return photographer;
    });
};

export default getAllPhotographers;