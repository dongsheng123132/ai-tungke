import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  MapPin,
  TrendingUp,
  Users,
  Target,
  BarChart3,
  Globe2,
  Layers,
  Sparkles,
  Search,
  Filter,
  Database,
  Zap
} from 'lucide-react';

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">产品功能</h1>
            <p className="text-xl text-blue-100">
              强大的AI技术，全方位的获客解决方案
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="map" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12">
              <TabsTrigger value="map">地图AI</TabsTrigger>
              <TabsTrigger value="analysis">数据分析</TabsTrigger>
              <TabsTrigger value="customer">客户画像</TabsTrigger>
              <TabsTrigger value="intelligence">智能获客</TabsTrigger>
            </TabsList>

            <TabsContent value="map" className="space-y-8">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <MapPin className="h-6 w-6 mr-3 text-blue-600" />
                    地图AI获客功能
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Globe2 className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">
                            全球客户位置分析
                          </h3>
                          <p className="text-gray-600">
                            基于地理位置数据，智能分析全球潜在客户分布，精准定位目标市场区域
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Layers className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">
                            多维度地图标记
                          </h3>
                          <p className="text-gray-600">
                            支持按行业、规模、活跃度等多个维度在地图上标记客户，一目了然
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <TrendingUp className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">
                            热力图展示
                          </h3>
                          <p className="text-gray-600">
                            通过热力图直观展示目标市场的客户密度，快速识别高价值区域
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Target className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">
                            区域深度分析
                          </h3>
                          <p className="text-gray-600">
                            针对特定区域进行深度分析，了解当地市场特点和竞争态势
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analysis" className="space-y-8">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <BarChart3 className="h-6 w-6 mr-3 text-indigo-600" />
                    数据分析功能
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Database className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">
                            实时数据报告
                          </h3>
                          <p className="text-gray-600">
                            实时生成获客数据报告，包括客户来源、转化率、ROI等关键指标
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <TrendingUp className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">
                            市场趋势预测
                          </h3>
                          <p className="text-gray-600">
                            基于历史数据和AI算法，预测市场趋势和客户需求变化
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <BarChart3 className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">
                            转化率分析
                          </h3>
                          <p className="text-gray-600">
                            详细分析客户转化漏斗，识别优化机会，提升整体转化率
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Sparkles className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">
                            竞争对手分析
                          </h3>
                          <p className="text-gray-600">
                            分析竞争对手的客户分布和市场策略，制定差异化竞争方案
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="customer" className="space-y-8">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Users className="h-6 w-6 mr-3 text-purple-600" />
                    客户画像功能
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Users className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">
                            智能客户分类
                          </h3>
                          <p className="text-gray-600">
                            AI自动分析客户特征，按行业、规模、需求等维度智能分类
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Target className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">
                            精准画像构建
                          </h3>
                          <p className="text-gray-600">
                            多维度数据整合，构建完整的客户画像，深入了解客户需求
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Search className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">
                            行为分析
                          </h3>
                          <p className="text-gray-600">
                            追踪客户行为轨迹，分析购买意向和决策过程
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Filter className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">
                            价值评估
                          </h3>
                          <p className="text-gray-600">
                            智能评估客户价值，优先跟进高价值潜在客户
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="intelligence" className="space-y-8">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Zap className="h-6 w-6 mr-3 text-yellow-600" />
                    智能获客功能
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Sparkles className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">
                            AI智能匹配
                          </h3>
                          <p className="text-gray-600">
                            基于企业需求和客户特征，AI自动匹配最合适的潜在客户
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Zap className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">
                            自动化推荐
                          </h3>
                          <p className="text-gray-600">
                            系统自动推荐高质量客户线索，节省人工筛选时间
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Target className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">
                            精准触达
                          </h3>
                          <p className="text-gray-600">
                            多渠道智能触达，提高客户响应率和转化效率
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <TrendingUp className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">
                            持续优化
                          </h3>
                          <p className="text-gray-600">
                            基于反馈数据持续优化获客策略，不断提升获客效果
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              功能亮点
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    200+国家覆盖
                  </h3>
                  <p className="text-gray-600">
                    全球范围内的客户数据，帮助您开拓国际市场
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    实时数据更新
                  </h3>
                  <p className="text-gray-600">
                    客户数据实时更新，确保信息的准确性和时效性
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    多维度筛选
                  </h3>
                  <p className="text-gray-600">
                    支持按行业、地区、规模等多个维度灵活筛选客户
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
