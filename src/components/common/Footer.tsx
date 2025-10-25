import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin } from 'lucide-react';
import Logo from '@/components/common/Logo';

export default function Footer() {
  // const currentYear = new Date().getFullYear(); // 固定年份按你的要求显示 2025

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              {/* 统一使用 Logo 组件 */}
              <Logo className="[&_*]:text-white" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              基于地图AI技术的外贸客户获取平台，让外贸获客更智能、更高效、更精准。
            </p>
            <div className="mt-4">
              <a
                href="https://www.tungke.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm"
              >
                www.tungke.com
              </a>
            </div>
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
                功能
              </Link>
              <Link
                to="/solutions"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                解决方案
              </Link>
              <Link
                to="/cases"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                客户案例
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <div className="space-y-4 text-gray-400 text-sm">
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5" />
                <div>
                  <div>hefangsheng@gmail.com</div>
                  <div className="text-gray-500">24小时内回复</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5" />
                <div>
                  <div>17388733152</div>
                  <div className="text-gray-500">周一至周五 9:00-18:00</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <div>
                  <div>广东省深圳市南山区</div>
                  <div className="text-gray-500">西丽大学城南山云谷综合楼103室</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">全球官网</h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <a
                href="https://www.tungke.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white"
              >
                <Globe className="h-4 w-4" /> 探客 TUNGKE
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          © 2025 TUNGKE 探客. All rights reserved.
          <div className="mt-1">火火的（深圳）科技有限公司</div>
        </div>
      </div>
    </footer>
  );
}
