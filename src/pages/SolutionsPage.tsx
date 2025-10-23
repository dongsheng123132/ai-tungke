import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Factory, Cpu, Shirt, Beaker, Package, TrendingUp, Target, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SolutionsPage() {
  const industries = [
    {
      icon: Factory,
      name: '机械制造',
      color: 'blue',
      description: '针对机械设备、工业零部件等制造企业',
      features: [
        '全球工业园区和制造业集群深度挖掘',
        '设备采购商和工程承包商精准定位',
        '竞争对手客户分布分析和挖掘',
        '展会参展商和行业协会会员数据整合'
      ],
      cases: '帮助某工程机械企业3个月挖掘2000+海外经销商和工程承包商'
    },
    {
      icon: Cpu,
      name: '电子产品',
      color: 'indigo',
      description: '服务消费电子、工业电子、电子元器件企业',
      features: [
        '全球电子产品分销商和零售商数据库',
        '电商平台卖家和品牌商信息采集',
        '科技园区和电子产业集群遍历检索',
        '新兴市场和蓝海市场机会挖掘'
      ],
      cases: '某智能硬件企业通过探客AI开拓东南亚市场，签约50+区域代理商'
    },
    {
      icon: Shirt,
      name: '纺织服装',
      color: 'purple',
      description: '为服装、面料、家纺等纺织企业提供获客方案',
      features: [
        '全球服装品牌商和贸易商数据挖掘',
        '时尚买手和采购商联系方式获取',
        '服装批发市场和商业街区深度检索',
        '快时尚品牌供应链企业分析'
      ],
      cases: '某服装出口企业精准定位欧美快时尚品牌供应商，订单量增长150%'
    },
    {
      icon: Beaker,
      name: '化工原料',
      color: 'green',
      description: '化工产品、原材料、精细化工企业专属方案',
      features: [
        '化工园区和产业基地企业全覆盖',
        '下游应用行业采购商精准匹配',
        '化工贸易商和分销商网络挖掘',
        '环保合规企业筛选和验证'
      ],
      cases: '某化工企业通过行业数据分析，成功开拓中东和南美新兴市场'
    },
    {
      icon: Package,
      name: '日用消费品',
      color: 'orange',
      description: '日用品、礼品、家居用品等消费品企业',
      features: [
        '全球零售商和连锁超市数据库',
        '电商平台和独立站卖家信息',
        '批发市场和贸易商网络挖掘',
        '品牌代理商和经销商定位'
      ],
      cases: '某家居用品企业挖掘亚马逊和eBay大卖家，实现跨境电商渠道突破'
    },
    {
      icon: TrendingUp,
      name: '通用解决方案',
      color: 'cyan',
      description: '适用于各类外贸企业的通用获客方案',
      features: [
        '全球目标市场客户地图可视化',
        '多行业跨界客户机会挖掘',
        '展会和行业活动参与企业数据',
        '社交媒体和B2B平台企业信息'
      ],
      cases: '服务500+外贸企业，覆盖50+细分行业，平均获客效率提升200%'
    }
  ];

  const colorMap: Record<string, { bg: string; border: string; icon: string; badge: string }> = {
    blue: { bg: 'from-blue-50 to-indigo-50', border: 'border-blue-200', icon: 'bg-blue-600', badge: 'bg-blue-50 text-blue-600' },
    indigo: { bg: 'from-indigo-50 to-purple-50', border: 'border-indigo-200', icon: 'bg-indigo-600', badge: 'bg-indigo-50 text-indigo-600' },
    purple: { bg: 'from-purple-50 to-pink-50', border: 'border-purple-200', icon: 'bg-purple-600', badge: 'bg-purple-50 text-purple-600' },
    green: { bg: 'from-green-50 to-emerald-50', border: 'border-green-200', icon: 'bg-green-600', badge: 'bg-green-50 text-green-600' },
    orange: { bg: 'from-orange-50 to-red-50', border: 'border-orange-200', icon: 'bg-orange-600', badge: 'bg-orange-50 text-orange-600' },
    cyan: { bg: 'from-cyan-50 to-blue-50', border: 'border-cyan-200', icon: 'bg-cyan-600', badge: 'bg-cyan-50 text-cyan-600' }
  };

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">行业解决方案</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              深耕行业特点，提供定制化外贸获客解决方案<br />
              助力不同行业企业精准开拓海外市场
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">行业专属获客方案</h2>
              <p className="text-xl text-gray-600">
                基于行业特征和市场规律，打造精准高效的获客策略
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {industries.map((industry) => {
                const Icon = industry.icon;
                const colors = colorMap[industry.color];
                
                return (
                  <Card key={industry.name} className={`border-2 ${colors.border} hover:shadow-xl transition-all`}>
                    <CardContent className={`p-8 bg-gradient-to-br ${colors.bg}`}>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className={`w-14 h-14 ${colors.icon} rounded-xl flex items-center justify-center`}>
                          <Icon className="h-7 w-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{industry.name}</h3>
                          <p className="text-gray-600 text-sm">{industry.description}</p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-bold text-gray-900 mb-3">核心功能</h4>
                        <div className="space-y-2">
                          {industry.features.map((feature, index) => (
                            <div key={index} className="flex items-start space-x-2">
                              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="text-gray-700 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className={`${colors.badge} rounded-lg p-4`}>
                        <div className="flex items-start space-x-2">
                          <Target className="h-5 w-5 flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="font-bold mb-1">成功案例</div>
                            <div className="text-sm">{industry.cases}</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">解决方案核心价值</h2>
              <p className="text-xl text-gray-600">
                从数据到客户，全链路赋能外贸企业
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">精准定位</h3>
                  <p className="text-gray-600 leading-relaxed">
                    基于地图数据和行业特征，精准定位目标客户，避免盲目开发，提升获客效率
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">效率提升</h3>
                  <p className="text-gray-600 leading-relaxed">
                    自动化数据采集和分析，大幅缩短客户开发周期，让销售团队专注于客户沟通
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">转化提升</h3>
                  <p className="text-gray-600 leading-relaxed">
                    AI智能评估客户价值，优先跟进高质量客户，显著提升客户转化率和成交率
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">定制您的专属获客方案</h2>
              <p className="text-xl text-blue-100 leading-relaxed mb-10">
                每个行业都有独特的市场特点和客户需求<br />
                探客AI为您量身打造最适合的外贸获客解决方案
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6">
                  <Link to="/contact">立即咨询</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                  <Link to="/demo">预约演示</Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-blue-100">服务企业</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-blue-100">覆盖行业</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-2">200%</div>
                <div className="text-blue-100">平均效率提升</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
