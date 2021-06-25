import { photographers } from '../../../datas.json';

const getAllTags = () => {
    return photographers.map(photographer => {
        photographer.map(tags => {
            return tags;
        });
        console.log(tags);
    });
};

export default getAllTags;
