import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, TrendingUp, Users, Zap, MapPin, BarChart3, Target, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6TTEyIDM0YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTAtMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00ek0yNCAzNGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTAtMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Zap className="h-4 w-4 text-yellow-300" />
              <span className="text-sm font-medium">AI驱动的外贸获客革命</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              探客外贸AI获客平台
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              基于地图AI技术，精准定位全球潜在客户<br />
              让外贸获客更智能、更高效、更精准
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6">
                <Link to="/demo">立即体验</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                <Link to="/contact">联系我们</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">核心功能</h2>
            <p className="text-xl text-gray-600">AI技术赋能，让外贸获客事半功倍</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">地图AI定位</h3>
                <p className="text-gray-600">
                  全球客户位置智能分析，精准标记潜在客户地理分布
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-indigo-500 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">热力图分析</h3>
                <p className="text-gray-600">
                  目标市场热力图展示，直观了解客户密度分布
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-500 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">客户画像</h3>
                <p className="text-gray-600">
                  智能分析客户特征，构建精准客户画像模型
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-pink-500 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">精准获客</h3>
                <p className="text-gray-600">
                  AI算法智能匹配，快速找到最有价值的潜在客户
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">为什么选择探客</h2>
            <p className="text-xl text-gray-600">专业的AI技术，卓越的获客效果</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">提升效率</h3>
              <p className="text-gray-600 leading-relaxed">
                AI自动化分析，节省90%的客户搜索时间，让销售团队专注于高价值客户跟进
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                <Globe className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">全球覆盖</h3>
              <p className="text-gray-600 leading-relaxed">
                覆盖200+国家和地区，海量客户数据库，帮助您开拓全球市场
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">数据安全</h3>
              <p className="text-gray-600 leading-relaxed">
                企业级数据加密，严格的隐私保护机制，确保您的商业信息安全
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">10K+</div>
              <div className="text-blue-100">企业用户</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">200+</div>
              <div className="text-blue-100">覆盖国家</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">500M+</div>
              <div className="text-blue-100">客户数据</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">95%</div>
              <div className="text-blue-100">客户满意度</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-4">准备好开启智能获客之旅了吗？</h2>
            <p className="text-xl mb-8 text-blue-100">
              立即体验探客AI获客平台，让您的外贸业务快速增长
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6">
                <Link to="/demo">免费试用</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                <Link to="/solutions">查看解决方案</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
