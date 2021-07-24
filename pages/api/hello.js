// req = HTTP incoming message, res = HTTP server response
export default function handler(req, res) {
	res.status(200).json({ text: 'Hello' });
}

// Try accssing it at http://localhost:3000/api/hello.

// 이 방식을 통해 getStaticProps나 getStaticPaths를 사용하지 않는다.
// 이 두 방식은 server-side에서만 동작한다.
