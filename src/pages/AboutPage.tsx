import { Card, CardContent } from '@/components/ui/card';
import { Award, Target, Users, Zap, TrendingUp, Globe, Shield, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">关于我们</h1>
            <p className="text-xl text-blue-100">
              致力于用AI技术革新外贸获客方式
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">公司简介</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                探客是一家专注于外贸AI获客技术的创新型科技公司。我们基于先进的地图AI技术和大数据分析能力，
                为外贸企业提供智能化的客户获取解决方案。通过精准的客户定位、智能的数据分析和高效的获客工具，
                帮助企业快速找到目标客户，提升获客效率，降低获客成本。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <Card className="border-2 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">我们的使命</h3>
                  <p className="text-gray-700 leading-relaxed">
                    让每一家外贸企业都能享受到AI技术带来的获客红利，
                    通过智能化工具降低获客门槛，提升获客效率，
                    助力中国外贸企业走向世界。
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">我们的愿景</h3>
                  <p className="text-gray-700 leading-relaxed">
                    成为全球领先的外贸AI获客平台，
                    用技术创新推动外贸行业数字化转型，
                    为全球贸易发展贡献力量。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">核心价值观</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">创新驱动</h3>
                <p className="text-gray-600">
                  持续技术创新，引领行业发展
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">客户至上</h3>
                <p className="text-gray-600">
                  以客户需求为中心，创造价值
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">诚信可靠</h3>
                <p className="text-gray-600">
                  坚守诚信原则，值得信赖
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">合作共赢</h3>
                <p className="text-gray-600">
                  携手合作伙伴，共创美好未来
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
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
                    探客科技在上海成立，开始专注于外贸AI获客技术研发
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
                    探客AI获客平台正式上线，首批100家企业用户入驻
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="text-2xl font-bold text-purple-600">2022年</div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-purple-600 rounded-full mt-2"></div>
                <div className="flex-1 pb-8 border-l-2 border-gray-200 pl-6 -ml-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">快速发展</h3>
                  <p className="text-gray-600">
                    用户数突破5000家，覆盖100+国家和地区，获得A轮融资
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="text-2xl font-bold text-pink-600">2023年</div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-pink-600 rounded-full mt-2"></div>
                <div className="flex-1 pb-8 border-l-2 border-gray-200 pl-6 -ml-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">行业领先</h3>
                  <p className="text-gray-600">
                    用户数突破10000家，成为行业领先的外贸AI获客平台
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="text-2xl font-bold text-green-600">2024年</div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-green-600 rounded-full mt-2"></div>
                <div className="flex-1 pl-6 -ml-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">持续创新</h3>
                  <p className="text-gray-600">
                    推出多项AI新功能，覆盖200+国家，服务客户超过15000家
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">我们的成就</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <Users className="h-8 w-8 mr-2" />
                  <div className="text-5xl font-bold">15K+</div>
                </div>
                <div className="text-blue-100">服务企业</div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <Globe className="h-8 w-8 mr-2" />
                  <div className="text-5xl font-bold">200+</div>
                </div>
                <div className="text-blue-100">覆盖国家</div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <TrendingUp className="h-8 w-8 mr-2" />
                  <div className="text-5xl font-bold">500M+</div>
                </div>
                <div className="text-blue-100">客户数据</div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <Award className="h-8 w-8 mr-2" />
                  <div className="text-5xl font-bold">95%</div>
                </div>
                <div className="text-blue-100">客户满意度</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
