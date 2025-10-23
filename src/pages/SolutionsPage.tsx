import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Factory,
  Cpu,
  Shirt,
  Droplet,
  Package,
  Wrench,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SolutionsPage() {
  const solutions = [
    {
      title: '机械制造行业',
      icon: Factory,
      description: '针对机械设备制造企业的专业获客解决方案',
      color: 'from-blue-500 to-blue-600',
      features: [
        '精准定位全球机械采购商',
        '分析目标市场的设备需求',
        '识别大型工程项目机会',
        '竞争对手客户分布分析',
        '展会客户跟踪管理'
      ],
      benefits: [
        '获客效率提升300%',
        '订单转化率提高45%',
        '市场覆盖扩大至50+国家'
      ]
    },
    {
      title: '电子科技行业',
      icon: Cpu,
      description: '为电子产品和科技企业量身定制的获客方案',
      color: 'from-indigo-500 to-indigo-600',
      features: [
        '识别消费电子采购商',
        '分析新兴市场机会',
        '追踪行业技术趋势',
        '定位B2B和B2C客户',
        '电商平台客户分析'
      ],
      benefits: [
        '新市场开拓速度提升200%',
        '客户质量提高60%',
        '销售周期缩短30%'
      ]
    },
    {
      title: '纺织服装行业',
      icon: Shirt,
      description: '专注纺织品和服装出口的智能获客系统',
      color: 'from-purple-500 to-purple-600',
      features: [
        '全球服装品牌采购商定位',
        '时尚趋势和市场分析',
        '季节性需求预测',
        '供应链客户管理',
        '展会和订货会客户跟进'
      ],
      benefits: [
        '客户管理效率提升250%',
        '复购率增长60%',
        '库存周转率提高40%'
      ]
    },
    {
      title: '化工产品行业',
      icon: Droplet,
      description: '化工产品贸易的专业化获客解决方案',
      color: 'from-green-500 to-green-600',
      features: [
        '精准匹配化工产品采购商',
        '行业资质和合规性筛选',
        '区域市场准入分析',
        '供应链上下游客户定位',
        '安全和环保要求匹配'
      ],
      benefits: [
        '客户匹配精准度92%',
        '成交周期缩短40%',
        '合规风险降低80%'
      ]
    },
    {
      title: '日用消费品行业',
      icon: Package,
      description: '消费品出口企业的全方位获客支持',
      color: 'from-pink-500 to-pink-600',
      features: [
        '零售商和分销商定位',
        '电商平台客户分析',
        '消费趋势和偏好研究',
        '区域市场容量评估',
        '品牌推广效果追踪'
      ],
      benefits: [
        '渠道拓展速度提升180%',
        '市场渗透率提高55%',
        '品牌知名度增长70%'
      ]
    },
    {
      title: '五金工具行业',
      icon: Wrench,
      description: '五金工具和建材产品的专业获客方案',
      color: 'from-orange-500 to-orange-600',
      features: [
        '建材市场和经销商定位',
        '工程项目采购商识别',
        '零售连锁客户分析',
        '区域建设需求预测',
        'DIY市场机会挖掘'
      ],
      benefits: [
        '大客户开发成功率提升65%',
        '项目订单增长150%',
        '市场份额扩大35%'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">行业解决方案</h1>
            <p className="text-xl text-blue-100">
              针对不同行业特点，提供专业化的获客解决方案
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Card
                  key={index}
                  className="border-2 hover:shadow-xl transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{solution.title}</CardTitle>
                        <p className="text-gray-600 mt-1">{solution.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-bold text-gray-900 mb-4 text-lg">核心功能</h3>
                        <ul className="space-y-3">
                          {solution.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-bold text-gray-900 mb-4 text-lg">预期收益</h3>
                        <div className="space-y-4">
                          {solution.benefits.map((benefit, idx) => (
                            <div
                              key={idx}
                              className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl"
                            >
                              <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                  <span className="text-white font-bold text-sm">
                                    {idx + 1}
                                  </span>
                                </div>
                                <span className="text-gray-800 font-medium">{benefit}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-4">找到适合您行业的解决方案</h2>
            <p className="text-xl mb-8 text-blue-100">
              我们的专业团队将为您量身定制最适合的获客方案
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6"
              >
                <Link to="/contact">
                  立即咨询
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6"
              >
                <Link to="/demo">免费试用</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
