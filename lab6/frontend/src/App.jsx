import Nav from 'react-bootstrap/Nav';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const res = fetch('http://localhost:3000/blog/posts');
	});

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<nav class="navbar navbar-expand-lg navbar-light bg-light">
							<a class="navbar-brand" href="#">
								FPT Poly
							</a>

							<div class="collapse navbar-collapse" id="navbarNav">
								<ul class="navbar-nav">
									<li class="nav-item active">
										<a class="nav-link" href="#">
											Home
										</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="#">
											Quản lý bài viết
										</a>
									</li>
								</ul>
							</div>
						</nav>
					</div>
				</div>
				<div className="row">
					<h1>Quản lý bài viết</h1>

					<div className="col-lg-9">
						<table class="table">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">Tiêu đề</th>
									<th scope="col">Thao tác</th>
								</tr>
							</thead>
							<tbody>
								{posts?.map((post) => {
									return (
										<tr>
											<th scope="row">1</th>
											<td>Tiêu đề</td>
											<td>
												<a href="">Xóa</a>
												{' | '}
												<a href="">Sửa</a>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>

					<div className="col-lg-3">
						<div className="shadow p-3 mb-5 bg-white rounded">
							<h4>Thêm sửa bài viết</h4>
							<form action="">
								<div
									className="form-group
                mb-4"
								>
									<input type="text" class="form-control" placeholder="Title" />
								</div>

								<div className="form-group mb-4">
									<input
										type="text"
										class="form-control"
										placeholder="Content"
									/>
								</div>
								<button className="btn btn-primary">Send</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
