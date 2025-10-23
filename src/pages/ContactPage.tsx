import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    industry: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.company || !formData.phone || !formData.email) {
      toast({
        title: '提交失败',
        description: '请填写所有必填项',
        variant: 'destructive'
      });
      return;
    }

    toast({
      title: '提交成功',
      description: '我们会尽快与您联系，感谢您的咨询！'
    });

    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      industry: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">联系我们</h1>
            <p className="text-xl text-blue-100">
              我们期待与您合作，共创外贸获客新未来
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">合作咨询表单</CardTitle>
                  <p className="text-gray-600 mt-2">
                    填写以下信息，我们的专业团队将在24小时内与您联系
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          姓名 <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="name"
                          placeholder="请输入您的姓名"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">
                          公司名称 <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="company"
                          placeholder="请输入公司名称"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">
                          联系电话 <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="请输入联系电话"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">
                          电子邮箱 <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="请输入电子邮箱"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="industry">所属行业</Label>
                      <Select
                        value={formData.industry}
                        onValueChange={(value) => setFormData({ ...formData, industry: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="请选择所属行业" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="machinery">机械制造</SelectItem>
                          <SelectItem value="electronics">电子科技</SelectItem>
                          <SelectItem value="textile">纺织服装</SelectItem>
                          <SelectItem value="chemical">化工产品</SelectItem>
                          <SelectItem value="consumer">日用消费品</SelectItem>
                          <SelectItem value="hardware">五金工具</SelectItem>
                          <SelectItem value="other">其他行业</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">咨询内容</Label>
                      <Textarea
                        id="message"
                        placeholder="请描述您的需求或问题..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg py-6"
                    >
                      提交咨询
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>联系方式</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">客服热线</h3>
                      <p className="text-gray-600">400-888-8888</p>
                      <p className="text-sm text-gray-500 mt-1">周一至周五 9:00-18:00</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">电子邮箱</h3>
                      <p className="text-gray-600">contact@tanke-ai.com</p>
                      <p className="text-sm text-gray-500 mt-1">24小时内回复</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">公司地址</h3>
                      <p className="text-gray-600">上海市浦东新区</p>
                      <p className="text-gray-600">张江高科技园区</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">工作时间</h3>
                      <p className="text-gray-600">周一至周五</p>
                      <p className="text-gray-600">9:00 - 18:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4">为什么选择我们</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">专业的技术团队支持</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">7×24小时客户服务</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">定制化解决方案</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">持续的产品升级</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
