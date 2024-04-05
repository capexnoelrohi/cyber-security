export default function Hacked() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f0f2f5] p-4">
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-[#003399]">Oops!!</h2>
          <p className="mt-3 text-lg">
            You have been <b>hacked!</b> Beware that your credentials are
            compromised.
          </p>
        </div>
        <div className="text-center">
          <p className="text-sm text-[#1877f2]">
            If you&apos;re not hacked, please contact us.
          </p>
        </div>
      </div>
    </div>
  );
}
