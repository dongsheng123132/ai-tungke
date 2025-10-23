import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">探客AI</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              基于地图AI技术的外贸客户获取平台，让外贸获客更智能、更高效、更精准。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-white transition-colors">
                首页
              </Link>
              <Link
                to="/features"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                产品功能
              </Link>
              <Link
                to="/cases"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                案例展示
              </Link>
              <Link
                to="/solutions"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                解决方案
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">服务支持</h3>
            <div className="space-y-2">
              <Link to="/demo" className="block text-gray-400 hover:text-white transition-colors">
                在线演示
              </Link>
              <Link
                to="/contact"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                联系我们
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">
                关于我们
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">联系方式</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>400-888-8888</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>contact@tanke-ai.com</span>
              </div>
              <div className="flex items-start space-x-2 text-gray-400">
                <MapPin className="h-4 w-4 mt-1" />
                <span>上海市浦东新区张江高科技园区</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>2025 探客外贸AI获客平台</p>
        </div>
      </div>
    </footer>
  );
}
