import com from '@/static/js/common.js'
export const article_data = {
	data(){
		return {
			// 日期
			time:'',
			// 文章大标题
			title:'',
			// 附加信息
			other:'',
			// 文章节点
			nodes: '',
			// 作者
			author:'',
			// 作者头像
			avatar:'',
			// 请求处理集合
			request_handler_group: {
				fetchArticle: [{
						code: 0,
						handle: () => this.fetchArticleSuccess
					},
					{
						code: -1,
						handle: () => this.fetchArticleFailed
					}
			
				]
			},
			// 请求集合
			request_task_group: [{
				task: null,
				func: '获取文章内容',
				url: 'http://www.jufu-unique.com/app.php/Article/getArticleMsg',
				method: 'POST',
				header: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				data: {},
				success: (res) => {
					com.requestResponse(this, [], this.request_handler_group.fetchArticle, res, 'short', 'bottom')
				},
				fail: (err) => {
					console.log(err)
				},
				complete: () => {
					this.cover = false
				}
			}]
		}
	},
	methods:{
		// 获取文章内容(发起)
		fetchArticle(id){
			this.$set(this.request_task_group[0], 'data', {
				article_id:id
			})
			this.$set(this.request_task_group[0], 'task', com.createRequestTask(this.request_task_group[0]))
		},
		// 获取文章内容成功(接收)
		fetchArticleSuccess(res){
			console.log('获取文章内容成功',res)
			this.renderArticle(res.data.data.article_msg)
		},
		// 获取文章内容失败(接收)
		fetchArticleFailed(res){
			console.log('获取文章内容失败',res)
		},
		// 渲染文章
		renderArticle(data){
			this.time= data.pubtime
			this.title=data.title
			this.other='阅读量 '+data.clicknum
			this.nodes=data.content
			this.author = data.keywords
			this.avatar = ''
		}
	}
}