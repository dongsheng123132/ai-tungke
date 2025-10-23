import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, Search, Brain, Database, Target, Layers, MapPin, BarChart3, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">产品功能</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              双地图引擎 + 遍历式检索 + AI智能分析<br />
              打造外贸获客的技术护城河
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">核心功能模块</h2>
              <p className="text-xl text-gray-600">
                从数据采集到客户评估的全链路智能化解决方案
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Layers className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">双地图引擎数据融合</h3>
                </div>
                <img 
                  src="https://miaoda-site-img.cdn.bcebos.com/images/21c46a59-6786-474a-8d10-06c85b7a7798.jpg" 
                  alt="Google地图数据" 
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Google地图全球覆盖</h4>
                      <p className="text-gray-600 text-sm">
                        接入Google地图API，覆盖全球200+国家和地区的商业数据，精准定位海外目标客户
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">高德地图国内深度</h4>
                      <p className="text-gray-600 text-sm">
                        整合高德地图国内企业POI数据，深度挖掘国内供应商和贸易商信息
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">数据融合与去重</h4>
                      <p className="text-gray-600 text-sm">
                        智能算法融合双引擎数据，自动去重和数据清洗，确保数据质量
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center">
                    <Search className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">遍历式深度检索</h3>
                </div>
                <img 
                  src="https://miaoda-site-img.cdn.bcebos.com/images/17c4adf2-cf2c-4e25-a02a-53f62f429cdd.jpg" 
                  alt="地图热力图分析" 
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">特定区域深度遍历</h4>
                      <p className="text-gray-600 text-sm">
                        对目标区域进行网格化遍历搜索，不遗漏任何潜在商机和客户线索
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">多维度筛选条件</h4>
                      <p className="text-gray-600 text-sm">
                        支持按行业、规模、地理位置等多维度设置筛选条件，精准定位目标客户
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">产业集群识别</h4>
                      <p className="text-gray-600 text-sm">
                        自动识别产业集群和商业中心，批量挖掘同类型企业客户
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">AI联网智能搜索</h3>
                </div>
                <img 
                  src="https://miaoda-site-img.cdn.bcebos.com/images/0ee12fd0-26e5-44da-832c-6ebda643d4fe.jpg" 
                  alt="AI智能搜索" 
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">实时联网验证</h4>
                      <p className="text-gray-600 text-sm">
                        AI自动联网搜索企业官网、社交媒体等公开信息，验证企业真实性和活跃度
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">信息自动补全</h4>
                      <p className="text-gray-600 text-sm">
                        智能抓取企业联系方式、主营产品、经营范围等关键信息，自动补全客户档案
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">动态数据更新</h4>
                      <p className="text-gray-600 text-sm">
                        定期自动更新客户信息，确保数据时效性，及时发现企业变化和商机
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border-2 border-orange-200">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center">
                    <Database className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">行业数据综合评估</h3>
                </div>
                <img 
                  src="https://miaoda-site-img.cdn.bcebos.com/images/755516e0-5bc0-443b-ac26-fb27ede8cfe2.jpg" 
                  alt="企业评估分析" 
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">工商信息整合</h4>
                      <p className="text-gray-600 text-sm">
                        整合企业工商注册信息、经营状态、股权结构等数据，全面了解企业背景
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">贸易数据分析</h4>
                      <p className="text-gray-600 text-sm">
                        分析企业进出口记录、贸易伙伴、交易规模等数据，评估客户采购能力
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">行业报告叠加</h4>
                      <p className="text-gray-600 text-sm">
                        结合行业研究报告和市场趋势数据，预测客户需求和采购意向
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-2xl p-12 text-white">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">智能客户画像与评分系统</h2>
                <p className="text-xl text-blue-100">
                  多维度标签体系 + AI价值评分 = 精准客户定位
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">智能标签系统</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    基于地理位置、行业类型、企业规模、经营状态等维度，自动生成多维度客户标签
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">客户价值评分</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    AI算法综合评估客户价值，生成0-100分的客户评分，优先跟进高价值客户
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">成交概率预测</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    基于历史数据和客户特征，预测成交概率和最佳联系时机，提升转化效率
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">定制化服务能力</h2>
              <p className="text-xl text-gray-600">
                根据行业特点和企业需求，提供深度定制的解决方案
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-2 hover:border-blue-500 transition-all hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Shield className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">行业专属数据模型</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    针对不同行业特点，定制专属的数据采集规则和分析模型，提升数据相关性和准确性
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full">机械制造</span>
                    <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-sm rounded-full">电子产品</span>
                    <span className="px-3 py-1 bg-purple-50 text-purple-600 text-sm rounded-full">纺织服装</span>
                    <span className="px-3 py-1 bg-pink-50 text-pink-600 text-sm rounded-full">化工原料</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-indigo-500 transition-all hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">区域市场深度挖掘</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    针对特定国家或地区市场，提供深度数据挖掘和市场分析服务，助力企业开拓新市场
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-50 text-green-600 text-sm rounded-full">欧美市场</span>
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-sm rounded-full">东南亚</span>
                    <span className="px-3 py-1 bg-teal-50 text-teal-600 text-sm rounded-full">中东非洲</span>
                    <span className="px-3 py-1 bg-cyan-50 text-cyan-600 text-sm rounded-full">拉美市场</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-purple-500 transition-all hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Database className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">私有数据源接入</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    支持接入企业私有数据源，与平台数据融合分析，构建专属的客户数据库和分析体系
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-50 text-purple-600 text-sm rounded-full">CRM系统</span>
                    <span className="px-3 py-1 bg-pink-50 text-pink-600 text-sm rounded-full">ERP数据</span>
                    <span className="px-3 py-1 bg-rose-50 text-rose-600 text-sm rounded-full">行业数据库</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-green-500 transition-all hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Globe className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">API接口与系统集成</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    提供标准API接口，支持与企业现有系统无缝集成，实现数据互通和流程自动化
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-50 text-green-600 text-sm rounded-full">RESTful API</span>
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-sm rounded-full">Webhook</span>
                    <span className="px-3 py-1 bg-teal-50 text-teal-600 text-sm rounded-full">数据导出</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">立即体验探客AI的强大功能</h2>
            <p className="text-xl text-gray-600 mb-10">
              预约产品演示，了解探客AI如何助力您的外贸业务增长
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link to="/demo">在线演示</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
                <Link to="/contact">定制咨询</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
