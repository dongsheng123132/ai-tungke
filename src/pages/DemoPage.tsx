import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Map } from '@/components/ui/map';
import { Badge } from '@/components/ui/badge';
import { MapPin, Users, TrendingUp, Globe, Filter } from 'lucide-react';

export default function DemoPage() {
  const [selectedRegion, setSelectedRegion] = useState('global');

  const regions = [
    {
      id: 'global',
      name: '全球视图',
      lat: 30.0,
      lng: 0.0,
      zoom: 2,
      address: '全球客户分布'
    },
    {
      id: 'asia',
      name: '亚洲市场',
      lat: 35.0,
      lng: 105.0,
      zoom: 4,
      address: '亚洲地区客户分布'
    },
    {
      id: 'europe',
      name: '欧洲市场',
      lat: 50.0,
      lng: 10.0,
      zoom: 4,
      address: '欧洲地区客户分布'
    },
    {
      id: 'america',
      name: '美洲市场',
      lat: 40.0,
      lng: -100.0,
      zoom: 4,
      address: '美洲地区客户分布'
    }
  ];

  const currentRegion = regions.find((r) => r.id === selectedRegion) || regions[0];

  const mockData = {
    global: {
      totalCustomers: 50000,
      activeCustomers: 35000,
      growthRate: '+25%',
      topCountries: ['美国', '德国', '英国', '日本', '澳大利亚']
    },
    asia: {
      totalCustomers: 18000,
      activeCustomers: 12500,
      growthRate: '+35%',
      topCountries: ['中国', '日本', '韩国', '新加坡', '印度']
    },
    europe: {
      totalCustomers: 15000,
      activeCustomers: 10800,
      growthRate: '+20%',
      topCountries: ['德国', '英国', '法国', '意大利', '西班牙']
    },
    america: {
      totalCustomers: 12000,
      activeCustomers: 8500,
      growthRate: '+22%',
      topCountries: ['美国', '加拿大', '墨西哥', '巴西', '阿根廷']
    }
  };

  const currentData = mockData[selectedRegion as keyof typeof mockData];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">在线演示</h1>
            <p className="text-xl text-blue-100">
              体验探客AI获客平台的强大功能
            </p>
          </div>
        </div>
      </section>

      {/* Demo Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <Tabs defaultValue="map" className="space-y-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="map">地图分析</TabsTrigger>
                <TabsTrigger value="heatmap">热力图</TabsTrigger>
                <TabsTrigger value="analytics">数据分析</TabsTrigger>
              </TabsList>

              <TabsContent value="map" className="space-y-6">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center">
                        <MapPin className="h-6 w-6 mr-3 text-blue-600" />
                        全球客户地图分布
                      </span>
                      <div className="flex items-center space-x-2">
                        <Filter className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-500">区域筛选</span>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {regions.map((region) => (
                        <Button
                          key={region.id}
                          variant={selectedRegion === region.id ? 'default' : 'outline'}
                          onClick={() => setSelectedRegion(region.id)}
                          className={
                            selectedRegion === region.id
                              ? 'bg-gradient-to-r from-blue-600 to-indigo-600'
                              : ''
                          }
                        >
                          {region.name}
                        </Button>
                      ))}
                    </div>

                    <div className="rounded-xl overflow-hidden border-2 border-gray-200">
                      <Map
                        ak="OeTpXHgdUrRT2pPyAPRL7pog6GlMlQzl"
                        option={{
                          lat: currentRegion.lat,
                          lng: currentRegion.lng,
                          zoom: currentRegion.zoom,
                          address: currentRegion.address
                        }}
                        className="w-full h-[500px]"
                      />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl">
                        <div className="flex items-center space-x-2 mb-2">
                          <Users className="h-5 w-5 text-blue-600" />
                          <span className="text-sm text-gray-600">总客户数</span>
                        </div>
                        <div className="text-2xl font-bold text-blue-600">
                          {currentData.totalCustomers.toLocaleString()}
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl">
                        <div className="flex items-center space-x-2 mb-2">
                          <Users className="h-5 w-5 text-green-600" />
                          <span className="text-sm text-gray-600">活跃客户</span>
                        </div>
                        <div className="text-2xl font-bold text-green-600">
                          {currentData.activeCustomers.toLocaleString()}
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl">
                        <div className="flex items-center space-x-2 mb-2">
                          <TrendingUp className="h-5 w-5 text-purple-600" />
                          <span className="text-sm text-gray-600">增长率</span>
                        </div>
                        <div className="text-2xl font-bold text-purple-600">
                          {currentData.growthRate}
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-orange-50 to-red-50 p-4 rounded-xl">
                        <div className="flex items-center space-x-2 mb-2">
                          <Globe className="h-5 w-5 text-orange-600" />
                          <span className="text-sm text-gray-600">覆盖国家</span>
                        </div>
                        <div className="text-2xl font-bold text-orange-600">
                          {currentData.topCountries.length}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-900 mb-3">主要国家分布</h3>
                      <div className="flex flex-wrap gap-2">
                        {currentData.topCountries.map((country, index) => (
                          <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                            {country}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="heatmap" className="space-y-6">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="h-6 w-6 mr-3 text-indigo-600" />
                      客户密度热力图
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="rounded-xl overflow-hidden border-2 border-gray-200">
                      <Map
                        ak="OeTpXHgdUrRT2pPyAPRL7pog6GlMlQzl"
                        option={{
                          lat: 39.915,
                          lng: 116.404,
                          zoom: 5,
                          address: '中国市场客户密度分布'
                        }}
                        className="w-full h-[500px]"
                      />
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                      <h3 className="font-bold text-gray-900 mb-4">热力图说明</h3>
                      <div className="space-y-2 text-gray-700">
                        <p>🔴 红色区域：客户密度极高，重点市场区域</p>
                        <p>🟠 橙色区域：客户密度较高，潜力市场区域</p>
                        <p>🟡 黄色区域：客户密度中等，待开发市场</p>
                        <p>🟢 绿色区域：客户密度较低，新兴市场机会</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle>客户行业分布</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { industry: '机械制造', percentage: 28, color: 'bg-blue-600' },
                          { industry: '电子科技', percentage: 22, color: 'bg-indigo-600' },
                          { industry: '纺织服装', percentage: 18, color: 'bg-purple-600' },
                          { industry: '化工产品', percentage: 15, color: 'bg-green-600' },
                          { industry: '其他行业', percentage: 17, color: 'bg-gray-600' }
                        ].map((item, index) => (
                          <div key={index}>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium text-gray-700">
                                {item.industry}
                              </span>
                              <span className="text-sm font-bold text-gray-900">
                                {item.percentage}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className={`${item.color} h-2 rounded-full transition-all duration-500`}
                                style={{ width: `${item.percentage}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle>客户规模分布</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { size: '大型企业', percentage: 35, color: 'bg-blue-600' },
                          { size: '中型企业', percentage: 42, color: 'bg-indigo-600' },
                          { size: '小型企业', percentage: 23, color: 'bg-purple-600' }
                        ].map((item, index) => (
                          <div key={index}>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium text-gray-700">
                                {item.size}
                              </span>
                              <span className="text-sm font-bold text-gray-900">
                                {item.percentage}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className={`${item.color} h-2 rounded-full transition-all duration-500`}
                                style={{ width: `${item.percentage}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle>月度获客趋势</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {[
                          { month: '1月', count: 1200 },
                          { month: '2月', count: 1450 },
                          { month: '3月', count: 1680 },
                          { month: '4月', count: 1920 },
                          { month: '5月', count: 2150 },
                          { month: '6月', count: 2400 }
                        ].map((item, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <span className="text-sm font-medium text-gray-700 w-12">
                              {item.month}
                            </span>
                            <div className="flex-1 bg-gray-200 rounded-full h-8 relative">
                              <div
                                className="bg-gradient-to-r from-blue-600 to-indigo-600 h-8 rounded-full flex items-center justify-end pr-3 transition-all duration-500"
                                style={{ width: `${(item.count / 2400) * 100}%` }}
                              >
                                <span className="text-xs font-bold text-white">
                                  {item.count}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle>转化率分析</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl">
                          <div className="text-sm text-gray-600 mb-1">线索转化率</div>
                          <div className="text-3xl font-bold text-blue-600">45%</div>
                        </div>
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl">
                          <div className="text-sm text-gray-600 mb-1">客户成交率</div>
                          <div className="text-3xl font-bold text-green-600">32%</div>
                        </div>
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl">
                          <div className="text-sm text-gray-600 mb-1">客户复购率</div>
                          <div className="text-3xl font-bold text-purple-600">68%</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
}
