const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const Blog = require('../models/Blog');
const api = supertest(app);
const blogs = [
    {
      title: "React patterns",
      author: "Michael Chan",
      url: "https://reactpatterns.com/",
      likes: 7,
    },
    {
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 5,
    },
    {
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
      likes: 12,
    },
    {
      title: "First class tests",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
      likes: 10,
    },
    {
      title: "TDD harms architecture",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
      likes: 0,
    },
    {
      title: "Type wars",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
      likes: 2,
    }  
  ];
beforeEach(async ()=>{
    await Blog.deleteMany();
    blogArray = blogs.map((blog)=> new Blog(blog));
    blogPromise = blogArray.map((blog)=> blog.save());
    await Promise.all(blogPromise);
      
});

test('blogs are returned as json', async ()=> {
    await api
        .get('/api/blogs')  
        .expect('content-type', /application\/json/)
        .expect(200);
        
})

test('same number of blogs are returned',async ()=> {
    const blogList = await api.get('/api/blogs');
    console.log(blogList.body);
    expect(blogList.body).toHaveLength(blogs.length);
})

test('check if id is defined',async ()=>{
    const blogList = await api.get('/api/blogs');
    console.log(blogList.body);
    expect(blogList.body[0].id).toBeDefined();
})

test('check if the post request is executed', async ()=> {
    const response = await api.post('/api/blogs').send({
        title: "Random Test",
        author: "Robert C. Martin",
        url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
        likes: 2,
      }  );
    const request = await api.get('/api/blogs');
    const titles = request.body.map(blog => blog.title);
    expect(request.body).toHaveLength(blogs.length+1);
    expect(titles).toContain("Random Test");
})

test('check if the number of likes is set to 0 if likes if undefined', async ()=>{
    const request = await api.post('/api/blogs').send({
        title: "Random Test",
        author: "Robert C. Martin",
        url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html"})
    expect(request.body.likes).toBeDefined();
    expect(request.body.likes).toEqual(0);
    
    }
)



afterAll(async ()=> {
    await mongoose.connection.close();
})