import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, TrendingUp, Users, Zap, MapPin, BarChart3, Target, Shield, Search, Database, Brain, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white pt-24 pb-16 md:pb-24 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6TTEyIDM0YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTAtMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10 hidden lg:block"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-full mb-6">
              <Zap className="h-4 w-4 text-yellow-300" />
              <span className="text-sm font-medium">双地图引擎 + AI深度挖掘 = 精准获客</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              探客AI·外贸智能获客平台
            </h1>
            
            <p className="text-xl md:text-2xl mb-6 text-blue-100 leading-relaxed">
              基于Google地图+高德地图的深度数据挖掘系统
            </p>
            
            <p className="text-lg mb-10 text-blue-50 max-w-3xl mx-auto leading-relaxed">
              遍历式地点检索 × AI联网搜索 × 行业数据综合评估<br />
              定制版探迹升级方案，让外贸获客更智能、更精准、更高效
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6">
                <Link to="/demo">在线演示</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                <Link to="/contact">定制咨询</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="bg-white/5 border border-white/20 rounded-lg p-5">
                <div className="text-3xl font-bold mb-1">双引擎</div>
                <div className="text-sm text-white/80">Google+高德地图</div>
              </div>
              <div className="bg-white/5 border border-white/20 rounded-lg p-5">
                <div className="text-3xl font-bold mb-1">深度挖掘</div>
                <div className="text-sm text-white/80">遍历式地点检索</div>
              </div>
              <div className="bg-white/5 border border-white/20 rounded-lg p-5">
                <div className="text-3xl font-bold mb-1">AI评估</div>
                <div className="text-sm text-white/80">智能客户价值分析</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-20 md:h-24 lg:h-28">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">核心技术优势</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              突破传统获客局限，打造定制化外贸智能获客解决方案
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 hover:border-blue-500 transition-all hover:shadow-xl">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <Layers className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">双地图引擎融合</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  整合Google地图全球数据和高德地图国内深度数据，实现全球范围内的精准客户定位和分析
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full">全球覆盖</span>
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-sm rounded-full">数据融合</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-indigo-500 transition-all hover:shadow-xl">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Search className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">遍历式深度检索</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  对特定地点进行遍历式深度挖掘，不放过任何潜在商机，挖掘传统方式无法触达的客户资源
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-sm rounded-full">深度遍历</span>
                  <span className="px-3 py-1 bg-purple-50 text-purple-600 text-sm rounded-full">全面覆盖</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-500 transition-all hover:shadow-xl">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                  <Brain className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">AI联网智能搜索</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  实时联网搜索验证企业信息，叠加AI分析能力，确保客户数据的准确性和时效性
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-50 text-purple-600 text-sm rounded-full">实时验证</span>
                  <span className="px-3 py-1 bg-pink-50 text-pink-600 text-sm rounded-full">AI分析</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-500 transition-all hover:shadow-xl">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                  <Database className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">行业数据综合评估</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  整合工商信息、贸易数据、行业报告等多维度数据源，对客户进行全方位价值评估
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-50 text-green-600 text-sm rounded-full">多维评估</span>
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-sm rounded-full">数据整合</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-500 transition-all hover:shadow-xl">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
                  <Target className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">精准客户画像</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  基于地理位置、行业特征、企业规模等多维度标签，构建精准的客户画像和评分体系
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-orange-50 text-orange-600 text-sm rounded-full">智能标签</span>
                  <span className="px-3 py-1 bg-red-50 text-red-600 text-sm rounded-full">价值评分</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-cyan-500 transition-all hover:shadow-xl">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">定制化服务能力</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  根据不同行业和企业需求，提供深度定制的数据模型、搜索规则和分析维度
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-cyan-50 text-cyan-600 text-sm rounded-full">灵活定制</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full">专属方案</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">技术架构展示</h2>
            <p className="text-xl text-gray-600">
              多层次数据挖掘 + AI智能分析 = 精准获客
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <img 
                  src="https://miaoda-site-img.cdn.bcebos.com/images/c467c254-ceab-4495-b8fe-49558b4642b3.jpg" 
                  alt="全球地图数据可视化" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">全球地图数据可视化</h3>
                  <p className="text-gray-600 leading-relaxed">
                    基于Google地图和高德地图的双引擎数据融合，实现全球客户分布的实时可视化展示，热力图分析帮助快速识别目标市场
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <img 
                  src="https://miaoda-site-img.cdn.bcebos.com/images/1ead13c1-6024-48ed-88ed-fc268c016190.jpg" 
                  alt="AI智能数据分析" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">AI智能数据分析</h3>
                  <p className="text-gray-600 leading-relaxed">
                    运用深度学习和机器学习算法，对海量客户数据进行智能分析和价值评估，自动识别高价值潜在客户
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">地图数据采集</h4>
                  <p className="text-gray-600 text-sm">
                    双地图引擎遍历式检索，全面采集目标区域企业信息
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">AI联网验证</h4>
                  <p className="text-gray-600 text-sm">
                    实时联网搜索，叠加行业数据，验证企业真实性
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-8 w-8 text-purple-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">综合价值评估</h4>
                  <p className="text-gray-600 text-sm">
                    多维度数据整合分析，生成客户价值评分报告
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">为什么选择探客AI</h2>
            <p className="text-xl text-gray-600">
              相比传统获客平台的技术升级
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">双地图引擎 vs 单一数据源</h3>
                      <p className="text-gray-700">
                        Google地图+高德地图双引擎融合，数据覆盖更全面，国内外客户一网打尽
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Search className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">遍历式检索 vs 关键词搜索</h3>
                      <p className="text-gray-700">
                        特定地点深度遍历，挖掘隐藏商机，不依赖关键词，发现更多潜在客户
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Brain className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">AI联网搜索 vs 静态数据库</h3>
                      <p className="text-gray-700">
                        实时联网验证企业信息，AI智能分析，确保数据准确性和时效性
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">深度定制 vs 标准化产品</h3>
                      <p className="text-gray-700">
                        根据行业特点和企业需求，提供专属数据模型和分析维度的定制服务
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">开启智能获客新时代</h2>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  探客AI助力外贸企业突破传统获客瓶颈，通过地图数据深度挖掘和AI智能分析，精准定位高价值客户，大幅提升获客效率和转化率
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg">双地图引擎全球数据覆盖</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg">遍历式深度数据挖掘</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg">AI智能客户价值评估</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg">行业定制化解决方案</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                    <Link to="/demo">立即体验</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                    <Link to="/contact">预约演示</Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <img 
                  src="https://miaoda-site-img.cdn.bcebos.com/images/de3012be-f4dc-4af7-a35c-daa8eaf0506a.jpg" 
                  alt="外贸国际物流" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">300%</div>
                      <div className="text-sm text-gray-600">获客效率提升</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">客户成功案例</h2>
            <p className="text-xl text-gray-600">
              真实数据见证探客AI的获客实力
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">5000+</div>
                <div className="text-gray-600 mb-4">精准客户挖掘</div>
                <p className="text-sm text-gray-500">
                  某机械出口企业通过探客AI在3个月内挖掘5000+精准海外客户
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
                <div className="text-gray-600 mb-4">转化率提升</div>
                <p className="text-sm text-gray-500">
                  某电子产品外贸公司客户转化率从15%提升至85%
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-4xl font-bold text-purple-600 mb-2">200%</div>
                <div className="text-gray-600 mb-4">业绩增长</div>
                <p className="text-sm text-gray-500">
                  某纺织品出口企业年度业绩增长超过200%
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
