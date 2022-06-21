export default function ErrorBoundary() {
	return (
		<div className="p-4 basis-full md:basis-1/4 border border-red-400 flex flex-col justify-center rounded-lg items-center gap-2">
			<h1 className="font-bold text-xl text-red-500">
				حدث خطا أثناء معالجة البيانات
			</h1>
			<h3 className="text-red-400">تفاصيل تود عرضها للمستخدم</h3>
		</div>
	);
}
