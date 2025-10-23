import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, Target, Globe, BarChart3, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CasesPage() {
  const cases = [
    {
      company: '某工程机械制造企业',
      industry: '机械制造',
      challenge: '传统展会获客成本高，海外市场开拓困难，缺乏精准的经销商和工程承包商资源',
      solution: '利用探客AI双地图引擎，对全球主要工业园区和制造业集群进行遍历式检索，结合AI联网搜索验证企业资质',
      results: [
        { label: '挖掘客户', value: '2000+', unit: '家' },
        { label: '签约经销商', value: '35', unit: '家' },
        { label: '获客成本降低', value: '60%', unit: '' },
        { label: '订单增长', value: '180%', unit: '' }
      ],
      image: 'https://miaoda-site-img.cdn.bcebos.com/images/0a47a34a-6c1f-4f2b-b2f1-89e3005c3106.jpg'
    },
    {
      company: '某智能硬件出口企业',
      industry: '电子产品',
      challenge: '东南亚市场竞争激烈，难以找到优质区域代理商，传统B2B平台效果不佳',
      solution: '通过探客AI定位东南亚电子产品分销商和零售商，AI智能评估客户价值，优先跟进高潜力客户',
      results: [
        { label: '精准客户', value: '1500+', unit: '家' },
        { label: '签约代理商', value: '50+', unit: '家' },
        { label: '市场覆盖率', value: '85%', unit: '' },
        { label: '销售额增长', value: '250%', unit: '' }
      ],
      image: 'https://miaoda-site-img.cdn.bcebos.com/images/549a8cf8-6134-4012-9d93-667757ac01ed.jpg'
    },
    {
      company: '某服装出口企业',
      industry: '纺织服装',
      challenge: '欧美快时尚品牌供应链准入门槛高，缺乏有效的品牌商和采购商联系渠道',
      solution: '利用探客AI深度挖掘欧美服装品牌供应链企业，结合行业数据分析采购需求和合作机会',
      results: [
        { label: '目标客户', value: '800+', unit: '家' },
        { label: '成功对接', value: '120', unit: '家' },
        { label: '转化率提升', value: '70%', unit: '' },
        { label: '订单量增长', value: '150%', unit: '' }
      ],
      image: 'https://miaoda-site-img.cdn.bcebos.com/images/7fe6e6a8-d9aa-430b-8faa-440986b1a887.jpg'
    },
    {
      company: '某化工原料企业',
      industry: '化工原料',
      challenge: '中东和南美新兴市场信息不透明，难以找到合规可靠的贸易商和终端客户',
      solution: '通过探客AI遍历化工园区和产业基地，AI联网搜索验证企业合规性和经营状态',
      results: [
        { label: '潜在客户', value: '1200+', unit: '家' },
        { label: '合规企业', value: '600+', unit: '家' },
        { label: '新市场开拓', value: '5', unit: '个' },
        { label: '业绩增长', value: '200%', unit: '' }
      ],
      image: 'https://miaoda-site-img.cdn.bcebos.com/images/755516e0-5bc0-443b-ac26-fb27ede8cfe2.jpg'
    },
    {
      company: '某家居用品企业',
      industry: '日用消费品',
      challenge: '跨境电商渠道单一，亚马逊和eBay大卖家资源难以获取，缺乏有效的联系方式',
      solution: '利用探客AI挖掘电商平台大卖家和独立站运营商，AI分析销售数据评估合作价值',
      results: [
        { label: '电商卖家', value: '3000+', unit: '家' },
        { label: '大卖家对接', value: '200+', unit: '家' },
        { label: '跨境渠道', value: '10+', unit: '个' },
        { label: '销量增长', value: '300%', unit: '' }
      ],
      image: 'https://miaoda-site-img.cdn.bcebos.com/images/33314b0f-d787-4328-97d1-73f08c8deced.jpg'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">成功案例</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              真实数据见证探客AI的获客实力<br />
              助力外贸企业实现业绩突破性增长
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">客户成功故事</h2>
              <p className="text-xl text-gray-600">
                不同行业，同样的成功，探客AI助力企业精准获客
              </p>
            </div>

            <div className="space-y-16">
              {cases.map((caseItem, index) => (
                <Card key={index} className="border-2 hover:border-blue-500 transition-all hover:shadow-xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      <div className={`p-8 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                        <div className="flex items-center space-x-3 mb-6">
                          <span className="px-4 py-1 bg-blue-100 text-blue-600 text-sm font-bold rounded-full">
                            {caseItem.industry}
                          </span>
                          <h3 className="text-2xl font-bold text-gray-900">{caseItem.company}</h3>
                        </div>

                        <div className="space-y-6">
                          <div>
                            <div className="flex items-center space-x-2 mb-3">
                              <Target className="h-5 w-5 text-red-500" />
                              <h4 className="font-bold text-gray-900">面临挑战</h4>
                            </div>
                            <p className="text-gray-600 leading-relaxed">{caseItem.challenge}</p>
                          </div>

                          <div>
                            <div className="flex items-center space-x-2 mb-3">
                              <Zap className="h-5 w-5 text-yellow-500" />
                              <h4 className="font-bold text-gray-900">解决方案</h4>
                            </div>
                            <p className="text-gray-600 leading-relaxed">{caseItem.solution}</p>
                          </div>

                          <div>
                            <div className="flex items-center space-x-2 mb-4">
                              <TrendingUp className="h-5 w-5 text-green-500" />
                              <h4 className="font-bold text-gray-900">实施效果</h4>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              {caseItem.results.map((result, idx) => (
                                <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 text-center">
                                  <div className="text-2xl font-bold text-blue-600 mb-1">
                                    {result.value}{result.unit}
                                  </div>
                                  <div className="text-sm text-gray-600">{result.label}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                        <img 
                          src={caseItem.image} 
                          alt={caseItem.company} 
                          className="w-full h-full object-cover min-h-[400px]"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">整体成效数据</h2>
              <p className="text-xl text-gray-600">
                探客AI服务500+外贸企业的真实数据
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600 mb-2">服务企业</div>
                  <p className="text-sm text-gray-500">
                    覆盖50+细分行业
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="text-4xl font-bold text-green-600 mb-2">100万+</div>
                  <div className="text-gray-600 mb-2">挖掘客户</div>
                  <p className="text-sm text-gray-500">
                    覆盖全球200+国家
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="text-4xl font-bold text-purple-600 mb-2">200%</div>
                  <div className="text-gray-600 mb-2">效率提升</div>
                  <p className="text-sm text-gray-500">
                    平均获客效率提升
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-8 w-8 text-orange-600" />
                  </div>
                  <div className="text-4xl font-bold text-orange-600 mb-2">85%</div>
                  <div className="text-gray-600 mb-2">客户满意度</div>
                  <p className="text-sm text-gray-500">
                    持续合作率超过90%
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">成为下一个成功案例</h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              探客AI已帮助500+外贸企业实现业绩突破<br />
              现在轮到您体验智能获客的力量
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
        </div>
      </section>
    </div>
  );
}
