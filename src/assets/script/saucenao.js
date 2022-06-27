//因为会出现跨域的问题，所以用后端node的方式请求
import axios from "axios";

export default {

  async saucenao(imageURL) {
    return await axios.get('https://saucenao.com/search.php', {
      params: {
        url: imageURL,
        db: 999,
        api_key: '80814f5af2501739c9bd15ced9102e31946d0d39',
        output_type: 2,
        numres: 3
      }
    });
  }

}
