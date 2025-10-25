import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Zap, Award, Globe, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">关于我们</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              火火的（深圳）科技有限公司<br />
              专注于外贸AI获客技术研发与应用
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">公司简介</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    火火的（深圳）科技有限公司成立于2020年，是一家专注于外贸AI获客技术研发与应用的创新型科技企业。公司总部位于深圳南山区西丽大学城南山云谷综合楼，汇聚了一支由AI算法专家、大数据工程师和外贸行业资深人士组成的专业团队。
                  </p>
                  <p>
                    我们的核心产品"探客AI"是国内首个基于双地图引擎（Google地图+高德地图）的外贸智能获客平台。通过遍历式地点检索、AI联网搜索和行业数据综合评估，为外贸企业提供精准、高效的客户获取解决方案。
                  </p>
                  <p>
                    作为定制版探客的升级方案，探客AI在数据挖掘深度、AI分析能力和定制化服务方面具有显著优势，已成功服务500+外贸企业，覆盖50+细分行业，帮助客户实现平均200%的获客效率提升。
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Card className="text-center hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-blue-600 mb-2">2020</div>
                    <div className="text-gray-600">成立年份</div>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
                    <div className="text-gray-600">服务企业</div>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
                    <div className="text-gray-600">覆盖行业</div>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-orange-600 mb-2">200%</div>
                    <div className="text-gray-600">效率提升</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mb-20">
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">核心优势</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-2 hover:border-blue-500 transition-all hover:shadow-xl">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                      <Zap className="h-7 w-7 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">技术创新</h3>
                    <p className="text-gray-600 leading-relaxed">
                      国内首创双地图引擎融合技术，结合AI联网搜索和深度学习算法，实现外贸获客的技术突破
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-indigo-500 transition-all hover:shadow-xl">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                      <Target className="h-7 w-7 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">行业专注</h3>
                    <p className="text-gray-600 leading-relaxed">
                      深耕外贸获客领域，深刻理解不同行业特点和市场规律，提供精准的行业解决方案
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-purple-500 transition-all hover:shadow-xl">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                      <Users className="h-7 w-7 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">专业团队</h3>
                    <p className="text-gray-600 leading-relaxed">
                      汇聚AI算法、大数据、外贸行业专家，为客户提供专业的技术支持和咨询服务
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-green-500 transition-all hover:shadow-xl">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                      <Globe className="h-7 w-7 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">全球覆盖</h3>
                    <p className="text-gray-600 leading-relaxed">
                      数据覆盖全球200+国家和地区，帮助中国外贸企业精准开拓国际市场
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-orange-500 transition-all hover:shadow-xl">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                      <Award className="h-7 w-7 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">定制服务</h3>
                    <p className="text-gray-600 leading-relaxed">
                      提供深度定制化服务，根据企业需求量身打造专属的获客解决方案
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-cyan-500 transition-all hover:shadow-xl">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                      <TrendingUp className="h-7 w-7 text-cyan-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">效果保障</h3>
                    <p className="text-gray-600 leading-relaxed">
                      客户平均获客效率提升200%，客户满意度85%，持续合作率超过90%
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">发展历程</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="text-2xl font-bold text-blue-600">2020年</div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-2"></div>
                <div className="flex-1 pb-8 border-l-2 border-gray-200 pl-6 -ml-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">公司成立</h3>
                  <p className="text-gray-600">
                    火火的（深圳）科技有限公司成立，开始专注于外贸AI获客技术研发
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="text-2xl font-bold text-indigo-600">2021年</div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-indigo-600 rounded-full mt-2"></div>
                <div className="flex-1 pb-8 border-l-2 border-gray-200 pl-6 -ml-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">产品上线</h3>
                  <p className="text-gray-600">
                    探客AI 1.0版本正式上线，首创双地图引擎融合技术，服务首批50家外贸企业
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="text-2xl font-bold text-purple-600">2022年</div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-purple-600 rounded-full mt-2"></div>
                <div className="flex-1 pb-8 border-l-2 border-gray-200 pl-6 -ml-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">技术升级</h3>
                  <p className="text-gray-600">
                    推出AI联网搜索和智能评估功能，服务企业突破200家，覆盖20+细分行业
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="text-2xl font-bold text-green-600">2023年</div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-green-600 rounded-full mt-2"></div>
                <div className="flex-1 pb-8 border-l-2 border-gray-200 pl-6 -ml-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">市场拓展</h3>
                  <p className="text-gray-600">
                    推出行业定制化解决方案，服务企业超过400家，客户满意度达到85%
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="text-2xl font-bold text-orange-600">2024年</div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-orange-600 rounded-full mt-2"></div>
                <div className="flex-1 pb-8 pl-6 -ml-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">持续创新</h3>
                  <p className="text-gray-600">
                    服务企业突破500家，覆盖50+行业，成为外贸AI获客领域的领先品牌
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">企业使命与愿景</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">企业使命</h3>
                <p className="text-lg text-blue-100 leading-relaxed">
                  通过AI技术创新，让外贸获客更智能、更高效、更精准，助力中国外贸企业走向世界
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">企业愿景</h3>
                <p className="text-lg text-blue-100 leading-relaxed">
                  成为全球领先的外贸AI获客平台，服务10000+外贸企业，覆盖100+细分行业
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
