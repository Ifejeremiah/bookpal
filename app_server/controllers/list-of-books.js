const homelist = (req, res) => {
  res.render('index', {
    username: 'Alex',
  });
};

const eachbook = (req, res) => {
  res.render('books', {
    authorName: 'Napoleon Hill',
    bookTitle: 'Think and Grow Rich',
    bookStory: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est quos pariatur blanditiis accusamus corporis nam libero a adipisci dignissimos, dolore inventore optio nulla fugit praesentium tempora reprehenderit tempore quas? Rem voluptas repellat blanditiis, laborum ratione voluptatibus animi excepturi illo, nam temporibus, distinctio error dignissimos. Doloribus beatae minus labore delectus mollitia corporis eaque, voluptates harum vel. Odit doloribus deserunt totam soluta veritatis nobis ad laudantium optio suscipit perferendis unde quia iure eligendi ex, ab expedita? Minima explicabo laudantium beatae ad voluptate ipsum ratione cumque consequatur? Reprehenderit repudiandae officiis iusto eaque cupiditate, culpa facilis sequi exercitationem voluptatibus aperiam eveniet iste! Iure, eaque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam pariatur quod consectetur voluptatum optio natus, maiores tempore sapiente nam aliquid, commodi dolorem! Incidunt, fugit necessitatibus consequuntur molestias placeat esse eos magni exercitationem quaerat quia quisquam voluptatum voluptas quasi hic dolor. Possimus placeat ducimus, impedit earum obcaecati illo ipsum dicta pariatur, quos alias voluptas molestiae? Sapiente exercitationem aperiam eaque quae. Tenetur numquam cum, blanditiis explicabo eveniet eligendi aliquid ut ratione facere, nemo illum corrupti soluta modi ad molestiae! Dolores, veniam enim. Eum adipisci sed quibusdam earum, delectus rem eligendi omnis corporis voluptatum, praesentium error doloremque nam iusto! Non quibusdam iure totam eligendi dolorem sed corporis minima voluptatem porro alias officia nostrum numquam asperiores, accusantium sint quia culpa vitae tenetur distinctio quos. Ipsam officia obcaecati nulla facilis ab fugiat quia labore debitis, fuga illo assumenda alias animi quae qui at eius iusto itaque provident autem nostrum! Iure temporibus nostrum itaque blanditiis, nemo ex accusamus odio sint ad nam eius maiores officiis animi facere expedita quasi! Quisquam quod reprehenderit excepturi repellendus totam eos sint, omnis illo aut voluptatem ad reiciendis error doloribus asperiores nulla inventore, suscipit quidem quaerat veritatis sunt recusandae commodi? Commodi esse illum cupiditate. Saepe, ducimu voluptates maxime et alias asperiores.'
  });
};

const actionOnBooks = (req, res) => {
  res.render('actions', {
    username: 'Alex'
  });
};

const takeActions = (req, res) => {
  res.render('take-action');
};

const addBooks = (req, res) => {
  res.render('add-book');
};

const aboutPage = (req, res) => {
  res.render('about');
};

module.exports = {
  homelist,
  eachbook,
  aboutPage,
  actionOnBooks,
  takeActions,
  addBooks
}