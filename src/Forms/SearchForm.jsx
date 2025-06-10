export const SearchForm = ({ onSearch }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const topic = form.elements.topic.value;

    // here we make sure that input value wont we empty string
    if (topic.trim() === '') {
      alert('Please enter search terms!');
    }

    // if input would be filled properly we will call props with topic
    onSearch(topic);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="topic" placeholder="Search articles..." />
      <button>Search</button>
    </form>
  );
};
