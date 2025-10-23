import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Users, Globe, Award } from 'lucide-react';

export default function CasesPage() {
  const cases = [
    {
      company: '华东机械出口有限公司',
      industry: '机械制造',
      challenge: '传统获客方式效率低下，难以精准定位海外客户',
      solution: '使用探客地图AI功能，精准定位欧美市场的机械采购商',
      results: [
        { label: '获客效率提升', value: '300%', icon: TrendingUp },
        { label: '新增客户', value: '150+', icon: Users },
        { label: '覆盖国家', value: '25个', icon: Globe },
        { label: '订单增长', value: '200%', icon: Award }
      ],
      testimonial:
        '探客平台帮助我们快速找到了大量优质海外客户，获客效率提升了3倍，订单量翻了一番。'
    },
    {
      company: '深圳电子科技集团',
      industry: '电子产品',
      challenge: '市场竞争激烈，需要快速开拓新兴市场',
      solution: '利用热力图分析功能，发现东南亚和中东的潜在市场机会',
      results: [
        { label: '市场拓展', value: '15个', icon: Globe },
        { label: '客户增长', value: '280%', icon: Users },
        { label: '转化率提升', value: '45%', icon: TrendingUp },
        { label: '销售额增长', value: '180%', icon: Award }
      ],
      testimonial:
        '通过探客的市场分析功能，我们成功开拓了多个新兴市场，销售额实现了大幅增长。'
    },
    {
      company: '江苏纺织品进出口公司',
      industry: '纺织服装',
      challenge: '客户分散，难以进行有效的市场分析和客户管理',
      solution: '使用客户画像和智能分类功能，建立完善的客户管理体系',
      results: [
        { label: '客户管理效率', value: '250%', icon: TrendingUp },
        { label: '重点客户', value: '200+', icon: Users },
        { label: '复购率提升', value: '60%', icon: Award },
        { label: '客户满意度', value: '95%', icon: Globe }
      ],
      testimonial:
        '探客的客户画像功能让我们更了解客户需求，客户管理效率大幅提升，复购率显著增长。'
    },
    {
      company: '广州化工贸易有限公司',
      industry: '化工产品',
      challenge: '行业特殊性强，需要精准匹配特定类型的客户',
      solution: '运用AI智能匹配算法，精准定位化工产品采购商',
      results: [
        { label: '匹配精准度', value: '92%', icon: Award },
        { label: '有效客户', value: '180+', icon: Users },
        { label: '成交周期缩短', value: '40%', icon: TrendingUp },
        { label: '覆盖区域', value: '30+', icon: Globe }
      ],
      testimonial:
        'AI智能匹配功能非常精准，帮我们找到了很多高质量的客户，成交周期也大大缩短了。'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">成功案例</h1>
            <p className="text-xl text-blue-100">
              真实客户案例，见证探客的获客实力
            </p>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            {cases.map((caseItem, index) => (
              <Card key={index} className="border-2 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl mb-2">{caseItem.company}</CardTitle>
                      <Badge variant="secondary" className="text-sm">
                        {caseItem.industry}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-red-50 p-5 rounded-xl">
                      <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                        面临挑战
                      </h3>
                      <p className="text-gray-700">{caseItem.challenge}</p>
                    </div>

                    <div className="bg-green-50 p-5 rounded-xl">
                      <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        解决方案
                      </h3>
                      <p className="text-gray-700">{caseItem.solution}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-4 text-lg">实施效果</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {caseItem.results.map((result, idx) => {
                        const Icon = result.icon;
                        return (
                          <div
                            key={idx}
                            className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl text-center"
                          >
                            <Icon className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-blue-600 mb-1">
                              {result.value}
                            </div>
                            <div className="text-sm text-gray-600">{result.label}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-xl text-white">
                    <div className="flex items-start space-x-3">
                      <div className="text-4xl">"</div>
                      <div>
                        <p className="text-lg italic mb-2">{caseItem.testimonial}</p>
                        <p className="text-sm text-blue-100">— {caseItem.company}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Summary */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              整体成效统计
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
                <div className="text-gray-600">服务企业</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">250%</div>
                <div className="text-gray-600">平均效率提升</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
                <div className="text-gray-600">客户满意度</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-600 mb-2">200+</div>
                <div className="text-gray-600">覆盖国家</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
